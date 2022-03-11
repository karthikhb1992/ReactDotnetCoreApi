using eCommerceAPI.Entities.OrderAggregate;

namespace eCommerceAPI.DTOs
{
    public class CreateOrderDto
    {
        public bool SaveAddress { get; set; }

        public ShippingAddress ShippingAddress { get; set; }

        
    }
}