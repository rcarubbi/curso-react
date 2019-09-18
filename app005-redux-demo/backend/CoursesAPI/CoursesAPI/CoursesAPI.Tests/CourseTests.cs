using CoursesAPI.Domain.Entities;
using CoursesAPI.Domain.ValueObjects;
using NUnit.Framework;

namespace CoursesAPI.Tests
{
    [TestFixture]
    public class CourseTests
    {
        [Test]
        public void Given_data_When_instance_is_created_Should_return_a_valid_instance()
        {
            var newAuthor = new Author(
                    new Name
                    (
                        "Raphael",
                        "Carubbi"
                    )
                );

            Course c = new Course(
                "Course Title",
                "2:30",
                newAuthor.Id
            );

            Assert.IsInstanceOf<Course>(c);
        }
    }
}
