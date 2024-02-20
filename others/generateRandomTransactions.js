const supplier = [
  { id: 1, name: "Supplier A" },
  { id: 2, name: "Supplier B" },
  { id: 3, name: "Supplier C" },
  { id: 4, name: "Supplier D" },
  { id: 5, name: "Supplier E" },
];

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home Appliances" },
  { id: 4, name: "Books" },
  { id: 5, name: "Sports Equipment" },
];

const items = [
  { id: 1, name: "Laptop", price: 50000, category_id: 1, supplier_id: 1 },
  { id: 2, name: "T-shirt", price: 1000, category_id: 2, supplier_id: 2 },
  { id: 3, name: "Refrigerator", price: 20000, category_id: 3, supplier_id: 3 },
  { id: 4, name: "Novel", price: 500, category_id: 4, supplier_id: 4 },
  { id: 5, name: "Football", price: 1000, category_id: 5, supplier_id: 5 },
];

const discounts = [
  { id: 1, discountPercentage: 10, item_id: 1 },
  { id: 2, discountPercentage: 15, item_id: 2 },
  { id: 3, discountPercentage: 20, item_id: 3 },
  { id: 4, discountPercentage: 5, item_id: 4 },
  { id: 5, discountPercentage: 25, item_id: 5 },
];

const campaigns = [
  { id: 1, name: "Electronics Sale", discount_id: 1 },
  { id: 2, name: "Clothing Clearance", discount_id: 2 },
  { id: 3, name: "Home Appliances Discount", discount_id: 3 },
  { id: 4, name: "Book Festival", discount_id: 4 },
  { id: 5, name: "Sports Equipment Sale", discount_id: 5 },
];

function getRandomTransaction() {
  const randomSupplier = supplier[Math.floor(Math.random() * supplier.length)];
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const itemsWithCategoryAndSupplier = items.filter(
    (item) =>
      item.category_id === randomCategory.id &&
      item.supplier_id === randomSupplier.id
  );

  if (itemsWithCategoryAndSupplier.length === 0) {
    return getRandomTransaction();
  }

  const randomItem =
    itemsWithCategoryAndSupplier[
      Math.floor(Math.random() * itemsWithCategoryAndSupplier.length)
    ];
  const randomDiscount = discounts.find(
    (discount) => discount.item_id === randomItem.id
  );
  const randomCampaign = campaigns.find(
    (campaign) => campaign.discount_id === randomDiscount.id
  );

  // Generate random transactionId and paymentMethod for demonstration purposes
  const randomTransactionId = Math.floor(Math.random() * 1000);
  const paymentMethods = ["card", "cash"];
  const randomPaymentMethod =
    paymentMethods[Math.floor(Math.random() * paymentMethods.length)];

  // Generate random transactionDate (either today or tomorrow)
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const randomTransactionDate = Math.random() < 0.5 ? today : tomorrow;

  // Calculate transactionAmount (price minus discount)
  const transactionAmount =
    randomItem.price -
    (randomItem.price * randomDiscount.discountPercentage) / 100;

  return {
    transactionId: randomTransactionId,
    transactionDate: randomTransactionDate,
    supplier: randomSupplier,
    category: randomCategory,
    item: randomItem,
    discount: randomDiscount,
    campaign: randomCampaign,
    transactionAmount: transactionAmount,
    paymentMethod: randomPaymentMethod,
  };
}

function generateRandomTransactions(count) {
  const transactions = [];

  for (let i = 0; i < count; i++) {
    const transaction = getRandomTransaction();
    transactions.push(transaction);
  }

  return transactions;
}

const generatedTransactions = generateRandomTransactions(2);
console.log(generatedTransactions);
