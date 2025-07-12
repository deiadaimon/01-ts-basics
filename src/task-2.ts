const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

// *чи важливий порядок - спершу інтерфейс, а потім змінна?

interface Product {
    readonly id: number;
    title: string;
    description?: string;
}

console.log(`Product: ${JSON.stringify(product)}`);
