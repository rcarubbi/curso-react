using CoursesAPI.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoursesAPI.Domain.Entities
{
    public class Author : Entity
    {
        public Author(Name name)
        {
            Name = name;
        }

        public Name Name { get; private set; }

        public void ChangeName(string firstName, string lastName)
        {
            Name = new Name(firstName, lastName);
        }
    }
}
