namespace backend.Models
{
    public class Location
    {
        public int Id { get; set; }  // Primary Key
        public string? Name { get; set; }  // Nullable
        public string? Address { get; set; }  // Nullable
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string? Accessibility { get; set; }  // Nullable
        public int Rating { get; set; }
    }
}
