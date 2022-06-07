export const apiEndpoints = (id?: string | number) => {
    return {
        MARKETS: {
            GET_ALL: `/get_all_markets`,
            CREATE: `/protected/create_markets`,
            UPDATE: `/protected/update_market`,
            DELETE: `/protected/delete_market/${id}`,
        },
        ORDERS: {
            GET_ALL: `/get_all_markets`,
            GET_ACTIVE: `/protected/get_active_orders`,
            GET_OLD: `/protected/get_old_orders`,
            CREATE: `/protected/create_orders`,
            UPDATE_STATUS: `/protected/update_order_status`,
            UPDATE_SEEN_STATUS: `/protected/update_order_seen_status`,
        },
        PRODUCTS: {
            GET_ALL: `/get_all_products`,
            CREATE: `/protected/create_products`,
            UPDATE: `/protected/update_product`,
            DELETE: `/protected/delete_product/${id}`,
        },
    };
};
