using Microsoft.AspNetCore.Identity;

namespace eCommerceAPI.Entities
{
    public class User  : IdentityUser<int>
    {
        public UserAddress Address { get; set; }
    }
}