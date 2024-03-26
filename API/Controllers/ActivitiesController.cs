using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;

namespace API.Controllers;
public class ActivitiesController : BaseAPIController
{
    private readonly DataContext _context;
    public ActivitiesController(DataContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await _context.Activities.ToListAsync();
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivitiesById(Guid id)
    {
        return await _context.Activities.FindAsync(id);
    }
}
