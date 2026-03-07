import Hero from "@/components/products-component/Hero";
import CustomSourcingSection from "@/components/products-component/CustomSourcingSection";
import ProductTabsNav from "@/components/products-component/ProductTabsNav";
import ProductsScrollReset from "@/components/products-component/ProductsScrollReset";

export default function ProductsLayout({children}: Readonly<{
    children: React.ReactNode;
}>){
    return(
        <main>
            <ProductsScrollReset />
            <Hero />
            <ProductTabsNav />
            <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-16">
              {children}
            </section>
            <CustomSourcingSection />
        </main>
    )
}
