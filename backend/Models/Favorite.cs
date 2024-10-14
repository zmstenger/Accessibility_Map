using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Favorite
    {
        [Key]
        public int UserID { get; set; }
        [Key]
        public int LocationID { get; set; }
    }
}
