using Microsoft.AspNetCore.Mvc;
using Twin_Shop__Web_API.DTOs.Brand;
using Twin_Shop__Web_API.Services.Interfaces;

[ApiController]
[Route("api/[controller]")]
public class BrandsController : ControllerBase
{
    private readonly IBrandService _brandService;

    public BrandsController(IBrandService brandService)
    {
        _brandService = brandService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var brandsDto = await _brandService.GetAllBrandsAsync();
        return Ok(brandsDto);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var brandDto = await _brandService.GetBrandByIdAsync(id);
        if (brandDto == null)
            return NotFound();

        return Ok(brandDto);
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateBrandDto dto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var createdBrand = await _brandService.CreateBrandAsync(dto);
        return CreatedAtAction(nameof(GetById), new { id = createdBrand.BrandId }, createdBrand);
    }
}
