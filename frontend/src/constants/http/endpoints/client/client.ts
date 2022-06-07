export const clientEndpoints = (id?: string | number) => {
    return {
        MARKETS: {
            MAIN: `/markets`,
            ADD: `/markets/add`,
            EDIT: `/markets/edit/${id}`,
        },
        PRODUCTS: {
            MAIN: `/products`,
            ADD: `/products/add`,
            EDIT: `/products/edit/${id}`,
        },
        ORDERS: {
            MAIN: `/orders`,
        },
    };
};
