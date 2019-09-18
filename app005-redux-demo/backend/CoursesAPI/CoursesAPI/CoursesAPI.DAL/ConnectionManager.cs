using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoursesAPI.DAL
{
    public static class ConnectionManager
    {
        private static IMongoDatabase _instance;
        private static object _syncRoot = new object();
        public static IMongoDatabase GetContext()
        {

            if (_instance == null)
            {
                lock (_syncRoot)
                {
                    if (_instance == null)
                    {
                        _instance = new MongoClient(
                            ConfigurationManager.ConnectionStrings["default"].ConnectionString
                            ).GetDatabase(
                                ConfigurationManager.AppSettings["DatabaseName"]
                            );

                    }
                }
            }

            return _instance;
        }
    }
}
