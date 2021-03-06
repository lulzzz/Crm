﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace angular.Exceptions
{
    public class DataValidationException : Exception
    {
        public DataValidationException() { }
        public DataValidationException(string message) : base(message) { }
        public DataValidationException(string message, Exception inner) : base(message, inner) { }
    }
}
