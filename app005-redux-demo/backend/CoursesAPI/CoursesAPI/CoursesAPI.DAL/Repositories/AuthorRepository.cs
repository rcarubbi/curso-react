using CoursesAPI.Domain.Entities;
using CoursesAPI.Domain.Repositories;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoursesAPI.DAL.Repositories
{
    public class AuthorRepository : IAuthorRepository
    {
        private MongoDB.Driver.IMongoCollection<Author> _context;

        public AuthorRepository()
        {
            _context = ConnectionManager.GetContext().GetCollection<Author>("authors");
        }

        public async Task AddAuthorAsync(Author author)
        {
            await _context.InsertOneAsync(author);
            
        }

        public async Task DeleteAuthorAsync(Guid id)
        {
            await _context.DeleteOneAsync(c => c.Id == id);
        }

        public async Task<Author> GetAuthorByIdAsync(Guid id)
        {
            var results = await _context.FindAsync(c => c.Id == id);
            return results.SingleOrDefault();
        }

        public async Task<IReadOnlyCollection<Author>> GetAuthorsAsync()
        {
            var results = await _context.AsQueryable()
                 .ToListAsync();

            return results.AsReadOnly();
        }

        public async Task UpdateAuthorAsync(Author author, Guid id)
        {   
            await _context.ReplaceOneAsync(c => c.Id == id, author);
        }
    }
}
