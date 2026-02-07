using Twin_Shop__Web_API.Data;
using Twin_Shop__Web_API.Entities;
using Microsoft.EntityFrameworkCore;
using Twin_Shop__Web_API.Repositories.Implementations;

public class UserRepository : GenericRepository<User>,IUserRepository
{
    public UserRepository(AppDbContext context):base(context)
    {
        //get _context and _dbset from GenericRepository
    }

    public async Task<User?> GetByPhoneAsync(string phone)
    {
        return await _context.Users
            .FirstOrDefaultAsync(u => u.PhoneNumber == phone);
    }

    public async Task<User?> GetByEmailAsync(string email)
    {
        return await _context.Users
            .FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task<bool> PhoneExistsAsync(string phone)
    {
        return await _context.Users.AnyAsync(u => u.PhoneNumber == phone);
    }
}
