/** @format */

export const dev = true;

export const resMessages = (data) => {
 return {
  // standard success
  SUCCESS: {
   STANDARD: {
    message: { type: 1, title: "Lyckades!", text: false },
    success: true,
    data: data ? data : null,
   },

   // product
   PRODUCT: {
    CREATED: {
     message: {
      page: "products",
      type: 1,
      title: data
       ? `${data.length === 1 ? "Produkt skapad!" : "Produkter skapade!"}`
       : "",
      text: false,
     },
     success: true,
     data: data,
    },
    UPDATED: {
     message: {
      page: "products",
      type: 1,
      title: `Produkt uppdaterad!`,
      text: false,
     },
     success: true,
     data: data,
    },
    DELETED: {
     message: {
      page: "products",
      type: 1,
      title: `Produkt raderad!`,
      text: false,
     },
     success: true,
     data: data,
    },
   },

   // market
   MARKET: {
    CREATED: {
     message: {
      page: "markets",
      type: 1,
      title: data
       ? `${data.length === 1 ? "Marknad skapad!" : "Marknader skapade!"}`
       : "",
      text: false,
     },
     success: true,
     data: data,
    },
    UPDATED: {
     message: {
      page: "markets",
      type: 1,
      title: `Marknad uppdaterad!`,
      text: false,
     },
     success: true,
     data: data,
    },
    DELETED: {
     message: {
      page: "markets",
      type: 1,
      title: `Marknad raderad!`,
      text: false,
     },
     success: true,
     data: data,
    },
   },

   // order
   ORDER: {
    CREATED: {
     message: {
      page: "orders",
      type: 1,
      title: "Order skapad!",
      text: false,
     },
     success: true,
     data: data,
    },
    UPDATED: {
     message: {
      page: "orders",
      type: 1,
      title: `Order arkiverad!`,
      text: false,
     },
     success: true,
     data: data,
    },
    DELETED: {
     message: {
      page: "orders",
      type: 1,
      title: `Order raderad!`,
      text: false,
     },
     success: true,
     data: data,
    },
   },
  },

  // standard fail
  FAIL: {
   STANDARD: {
    message: { type: 0, title: "Misslyckades..", text: false },
    success: false,
    data: null,
   },
  },
 };
};
