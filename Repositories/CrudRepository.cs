﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace angular.Models
{
    public abstract class CrudRepository<T> : ICrudRepository<T> where T: class 
    {
        protected readonly CrmContext Context;

        public CrudRepository(CrmContext context)
        {
            Context = context;
        }

        public void Add(T item)
        {
            var items = GetQuery(Context);
            items. Add(item);
            Context.SaveChanges();
        }

        public T Find(int key)
        {
            var items = GetQuery(Context);
            return items.FirstOrDefault(GetExpression(key));
        }

        public IEnumerable<T> GetAll()
        {
            var items = GetQuery(Context);
            return items.ToList();
        }

        public void Remove(int key)
        {
            var items = GetQuery(Context);
            var entity = items.First(GetExpression(key));
            items.Remove(entity);
            Context.SaveChanges();
        }

        public void Update(T item)
        {
            var items = GetQuery(Context);
            items.Update(item);
            Context.SaveChanges();
        }

        public abstract DbSet<T> GetQuery(CrmContext context);

        public abstract Func<T,bool> GetExpression(int key);
    }
}
