using CoursesAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoursesAPI.Domain.Repositories
{
    public interface IAuthorRepository
    {
        Task<IReadOnlyCollection<Author>> GetAuthorsAsync();
        Task AddAuthorAsync(Author course);

        Task UpdateAuthorAsync(Author course, Guid id);

        Task DeleteAuthorAsync(Guid id);
        Task<Author> GetAuthorByIdAsync(Guid id);
    }
}
