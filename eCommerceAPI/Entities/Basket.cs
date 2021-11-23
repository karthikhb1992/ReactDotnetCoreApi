using System.Collections.Generic;
using System.Linq;

namespace eCommerceAPI.Entities
{
    public class Basket
    {
        public int Id { get; set; }

        public string BuyerId { get; set; }

        public List<BasketItem> Items { get; set; } = new(); // In- order to avoid List is undefined error at runtime

        public void AddItem(Product product,int quantity) 
        {
            // If product doesn't exists then add it 
            if(Items.All(item => item.ProductId != product.Id)) 
            {
                Items.Add(new BasketItem {Product = product, Quantity = quantity});
            }

            // If product already exists then Increase the quantity.
            var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);

            if(existingItem !=null) existingItem.Quantity += quantity;
        }

        public void RemoveItem(int productId, int quantity) 
        {
            var item = Items.FirstOrDefault(item => item.ProductId == productId);

            if(item == null) return ;

            item.Quantity -= quantity;

            if(item.Quantity == 0) Items.Remove(item);
        }
    }
}