using Twin_Shop__Web_API.Entities;

namespace Twin_Shop__Web_API.Repositories.Interfaces
{
    public interface IProductRepository : IGenericRepository<Product>
    {
        Task<IEnumerable<Product>> GetProductsWithBrandAsync();
    }
}
