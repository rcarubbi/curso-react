using System;

namespace CoursesAPI.Domain.Entities
{
    public class Course : Entity
    {
        public Course(string title, string length, Guid authorId)
        {
            Title = title;
            Length = length;
            AuthorId = authorId;
        }


        public string Title
        {
            get;
            private set;
        }

        public string Length
        {
            get;
            private set;
        }

       
       
        public Guid AuthorId
        {
            get;
            private set;
        }

       

        public void Rename(string title)
        {
            this.Title = title;
        }

        public void ChangeAuthor(Guid authorId)
        {
            this.AuthorId = authorId;
        }

        public void ChangeDuration(string length)
        {
            this.Length = length;
        }
    }
}
