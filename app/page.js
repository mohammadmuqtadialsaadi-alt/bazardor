
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "সব পণ্য", slug: "" },
  { name: "চাল", slug: "chal" },
  { name: "ডাল", slug: "dal" },
  { name: "তেল", slug: "tel" },
  { name: "সবজি", slug: "sobji" },
  { name: "মাছ", slug: "mach" },
  { name: "মাংস", slug: "mangsho" },
  { name: "ডিম", slug: "dim" },
];

const sampleProducts = [
  { emoji: "🍚", name: "মিনিকেট চাল", unit: "প্রতি কেজি", price: 75, change: 2.1 },
  { emoji: "🥔", name: "আলু", unit: "প্রতি কেজি", price: 35, change: -2.9 },
  { emoji: "🧅", name: "পেঁয়াজ", unit: "প্রতি কেজি", price: 60, change: 1.5 },
  { emoji: "🥚", name: "ডিম", unit: "প্রতি ডজন", price: 145, change: 0 },
  { emoji: "🫘", name: "মসুর ডাল", unit: "প্রতি কেজি", price: 120, change: -1.2 },
  { emoji: "🫙", name: "সয়াবিন তেল", unit: "প্রতি লিটার", price: 170, change: 0.8 },
];

const taka = (value) =>
  new Intl.NumberFormat("bn-BD").format(value);

function PriceBadge({ change }) {
  const rising = change > 0;
  const falling = change < 0;

  return (
    <span
      className={`rounded-full px-2 py-1 text-xs font-semibold ${
        rising
          ? "bg-green-100 text-green-700"
          : falling
            ? "bg-red-100 text-red-600"
            : "bg-gray-100 text-gray-500"
      }`}
    >
      {rising ? "▲" : falling ? "▼" : "—"}{" "}
      {taka(Math.abs(change))}%
    </span>
  );
}

function ProductCard({ product }) {
  return (
    <article className="white-card transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-green-50 text-6xl">
        {product.emoji}
      </div>

      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="muted mt-1 text-sm">{product.unit}</p>

      <div className="mt-5 flex items-end justify-between gap-2">
        <div>
          <p className="muted text-xs">আজকের দাম</p>
          <p className="text-xl font-bold text-green-700">
            {taka(product.price)} টাকা
          </p>
        </div>

        <PriceBadge change={product.change} />
      </div>
    </article>
  );
}

function Navbar() {
  const date = new Intl.DateTimeFormat("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <header className="border-b border-green-100 bg-white">
      <div className="container-main flex min-h-20 items-center justify-between gap-3 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-2xl">
            🛒
          </span>

          <span>
            <span className="block text-xl font-bold text-green-700">
              বাজার দর
            </span>
            <span className="block text-xs text-gray-500">{date}</span>
          </span>
        </Link>

        <div className="flex gap-2">
          <Link
            href="/signin"
            className="rounded-lg border border-green-200 px-3 py-2 text-sm font-semibold text-green-700"
          >
            সাইন ইন
          </Link>

          <Link href="/signup" className="green-button text-sm">
            সাইন আপ
          </Link>
        </div>
      </div>

      <nav className="container-main flex gap-2 overflow-x-auto py-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={
              category.slug
                ? `/category/${category.slug}`
                : "/#সব-পণ্য"
            }
            className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-green-700"
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function PriceTicker() {
  const items = [...sampleProducts, ...sampleProducts];

  return (
    <div className="overflow-hidden border-b border-green-100 bg-green-50 py-3">
      <div className="ticker-track">
        {items.map((product, index) => (
          <div
            key={`${product.name}-${index}`}
            className="mx-5 flex shrink-0 items-center gap-2 text-sm"
          >
            <span>{product.emoji}</span>
            <span className="font-semibold">{product.name}</span>
            <span className="text-green-800">
              {taka(product.price)} টাকা
            </span>
            <PriceBadge change={product.change} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="container-main grid items-center gap-8 py-12 md:grid-cols-2 md:py-20">
      <div>
        <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          🌿 প্রতিদিনের বাজার, এখন হাতের মুঠোয়
        </span>

        <h1 className="mt-6 text-4xl leading-tight font-bold sm:text-5xl">
          বাজারের সঠিক দাম,
          <span className="block text-green-700">
            এবার এক নজরে
          </span>
        </h1>

        <p className="muted mt-5 max-w-lg text-base leading-8">
          চাল, ডাল, তেল, মাছ, মাংস ও নিত্যপ্রয়োজনীয় পণ্যের
          দাম জানুন সহজেই। বাজার করার আগে থাকুন প্রস্তুত।
        </p>

        <Link
          href="#সব-পণ্য"
          className="green-button mt-7"
        >
          সব পণ্যের দাম দেখুন <span>→</span>
        </Link>
      </div>

      <div className="flex min-h-64 items-center justify-center rounded-3xl bg-green-50 p-5 sm:min-h-80">
        <Image
          src="/bazar-hero.png"
          alt="বাজারের তাজা সবজি ও পণ্যের ঝুড়ি"
          width={480}
          height={380}
          priority
          className="h-auto max-h-80 w-full object-contain"
        />
      </div>
    </section>
  );
}

function PriceSection({ title, rising }) {
  const products = sampleProducts
    .filter((product) =>
      rising ? product.change > 0 : product.change < 0
    )
    .slice(0, 6);

  return (
    <section className="container-main py-8">
      <h2 className="section-heading mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <PriceTicker />
      <main>
        <Hero />

        <PriceSection
          title="আজ দাম বেড়েছে ▲"
          rising={true}
        />

        <PriceSection
          title="আজ দাম কমেছে ▼"
          rising={false}
        />

        <section id="সব-পণ্য" className="container-main scroll-mt-6 py-10">
          <div className="mb-7">
            <p className="text-sm font-bold tracking-widest text-green-700">
              PRODUCT DIRECTORY
            </p>
            <h2 className="section-heading mt-2">সব পণ্য</h2>
            <p className="muted mt-2">
              নিত্যপ্রয়োজনীয় পণ্যের দাম এক জায়গায় দেখুন।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sampleProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-green-100 bg-white">
        <div className="container-main flex flex-col justify-between gap-3 py-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-bold text-green-700">বাজার দর</p>
            <p className="muted text-sm">
              প্রয়োজনীয় পণ্যের দাম এক নজরে।
            </p>
          </div>

          <p className="muted max-w-md text-sm">
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
          </p>
        </div>
      </footer>
    </>
  );
}
