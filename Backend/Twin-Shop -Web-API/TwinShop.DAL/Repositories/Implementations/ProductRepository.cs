using Microsoft.EntityFrameworkCore;
using Twin_Shop__Web_API.Data;
using Twin_Shop__Web_API.Entities;
using Twin_Shop__Web_API.Repositories.Interfaces;

namespace Twin_Shop__Web_API.Repositories.Implementations
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
        public ProductRepository(AppDbContext context) : base(context)
        {
            //get _context and _dbset from GenericRepository
        }

        public async Task<IEnumerable<Product>> GetProductsWithBrandAsync()
        {
            return await _context.Products
                .Include(p => p.Brand)
                .ThenInclude(b => b.Category)
                .ToListAsync();
        }
    }
}
