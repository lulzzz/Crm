﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace angular.Models
{
    public class UserRepository : CrudRepository<User>, IUserRepository
    {
        public UserRepository(CrmContext context) : base(context)
        {}

        public override Func<User, bool> GetExpression(int key)
        {
            return User=>User.Id == key;
        }

        public override DbSet<User> GetQuery(CrmContext context)
        {
            return context.Users;
        }

        public User[] GetAvailableTeachers()
        {
            var result = Context.Users
                .Where(u => u.IsActive && !Context.Teachers.Any(t => t.Id == u.Id))
                .ToArray();
            return result;
        }
    }
}
