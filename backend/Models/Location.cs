using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Location
    {
        [Key]
        public int LocationID { get; set; }
        public string? LocationName { get; set; }  // Nullable
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
