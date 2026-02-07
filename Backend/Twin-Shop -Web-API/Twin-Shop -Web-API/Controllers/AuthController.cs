using Microsoft.AspNetCore.Mvc;
using Twin_Shop__Web_API.DTOs.Auth;
using Twin_Shop__Web_API.Services.Interfaces;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDto dto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        try
        {
            await _authService.RegisterAsync(dto);
            return Ok(new { message = "User registered successfully" });
        }
        catch (Exception ex)
        {
            return BadRequest(new { error = ex.Message });
        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var result = await _authService.LoginAsync(dto);

        if (!result)
            return Unauthorized(new { error = "Invalid phone number or password" });

        return Ok(new { message = "Login successful" });
    }
}
