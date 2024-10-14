using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Comment
    {
        [Key]
        public int LocationID { get; set; }
        [Key]
        public int UserID { get; set; }
        [Required]
        [Column("Comment")]
        public string UserComment { get; set; }  
    }
}
