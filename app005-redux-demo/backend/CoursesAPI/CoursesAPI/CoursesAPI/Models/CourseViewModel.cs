using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CoursesAPI.Models
{
    public class CourseViewModel
    {
        public string Title { get; set; }

        public Guid AuthorId { get; set; }

        public string Length { get; set; }

    }
}