using my.bookshop as shop from '../db/schema';

service Stats {
    @readonly
    entity OrderInfo as projection on shop.Orders excluding {
        createdBy,
        createdAt,
        modifiedBy,
        modifiedAt,
        book
    }
}