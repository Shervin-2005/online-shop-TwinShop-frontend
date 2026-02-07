using Twin_Shop__Web_API.Entities;
using Twin_Shop__Web_API.Repositories.Interfaces;

public interface IUserRepository : IGenericRepository<User>
{
    Task<User?> GetByPhoneAsync(string phone);
    Task<User?> GetByEmailAsync(string email);
    Task<bool> PhoneExistsAsync(string phone);
}
