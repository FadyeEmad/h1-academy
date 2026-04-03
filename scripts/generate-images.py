"""Generate placeholder academy assets matching brand palette (deep ink + gold). Replace with real assets anytime."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

# Logo-inspired palette (tune to match public/images/logo.png when you add the real file)
INK = (26, 47, 74)  # #1a2f4a
INK_DARK = (12, 25, 41)  # #0c1929
GOLD = (201, 162, 39)  # #c9a227
CREAM = (248, 246, 244)


def save_jpeg(img: Image.Image, path: Path, quality: int = 88) -> None:
    rgb = img.convert("RGB")
    rgb.save(path, "JPEG", quality=quality, optimize=True)


def make_logo() -> None:
    w, h = 320, 96
    img = Image.new("RGBA", (w, h), (*CREAM, 255))
    draw = ImageDraw.Draw(img)
    # Rounded badge
    pad = 8
    draw.rounded_rectangle([pad, pad, w - pad, h - pad], radius=18, fill=INK_DARK)
    inner = [pad + 6, pad + 6, pad + 56, h - pad - 6]
    draw.rounded_rectangle(inner, radius=12, fill=INK)
    # Gold accent bar
    draw.rectangle([pad + 62, pad + 28, pad + 68, h - pad - 28], fill=GOLD)
    # Wordmark area (abstract lines suggesting text)
    x0 = pad + 78
    for i in range(4):
        y = pad + 22 + i * 14
        lw = 140 - i * 18
        draw.rounded_rectangle([x0, y, x0 + lw, y + 8], radius=4, fill=(255, 255, 255, 230) if i == 0 else (220, 225, 232, 255))
    save_jpeg(img, OUT / "logo.png")


def make_hero_bg() -> None:
    w, h = 1920, 1080
    img = Image.new("RGB", (w, h), INK_DARK)
    g = Image.new("RGB", (w, h))
    px = g.load()
    for y in range(h):
        for x in range(w):
            t = (x / w + y / h) * 0.5
            r = int(INK_DARK[0] + (INK[0] - INK_DARK[0]) * t + 20 * (x / w))
            g_ = int(INK_DARK[1] + (INK[1] - INK_DARK[1]) * t + 15 * (y / h))
            b = int(INK_DARK[2] + (INK[2] - INK_DARK[2]) * t)
            px[x, y] = (min(r, 80), min(g_, 90), min(b, 120))
    # Soft gold glow orbs
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.ellipse([w // 2 - 400, -200, w // 2 + 400, 500], fill=(*GOLD, 35))
    od.ellipse([-100, h - 500, 500, h + 100], fill=(*GOLD, 22))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    img = img.filter(ImageFilter.GaussianBlur(radius=1.2))
    save_jpeg(img, OUT / "hero-bg.jpg", quality=82)


def make_service(idx: int) -> None:
    w, h = 800, 600
    base_hues = [
        (INK, GOLD, 0.15),
        (INK_DARK, (90, 120, 160), 0.12),
        (INK, (180, 200, 220), 0.1),
        (INK_DARK, GOLD, 0.18),
    ]
    ink, accent, gold_amt = base_hues[(idx - 1) % 4]
    img = Image.new("RGB", (w, h), ink)
    g = Image.new("RGB", (w, h))
    px = g.load()
    for y in range(h):
        for x in range(w):
            nx, ny = x / w, y / h
            mix = 0.35 + 0.35 * nx + 0.2 * ny + (idx * 0.04)
            r = int(ink[0] * (1 - mix) + accent[0] * mix)
            g_ = int(ink[1] * (1 - mix) + accent[1] * mix)
            b = int(ink[2] * (1 - mix) + accent[2] * mix)
            px[x, y] = (min(r, 255), min(g_, 255), min(b, 255))
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.pieslice([50 + idx * 30, 80, 450, 480], start=20 + idx * 15, end=300, fill=(*GOLD, int(255 * gold_amt)))
    od.rectangle([w - 280, h - 220, w - 40, h - 40], fill=(*GOLD, 40))
    img = Image.alpha_composite(g.convert("RGBA"), overlay).convert("RGB")
    img = img.filter(ImageFilter.GaussianBlur(radius=0.8))
    save_jpeg(img, OUT / f"service-{idx}.jpg", quality=85)


def main() -> None:
    make_logo()
    make_hero_bg()
    for i in range(1, 5):
        make_service(i)
    print(f"Wrote assets to {OUT}")


if __name__ == "__main__":
    main()
