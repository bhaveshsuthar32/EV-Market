// import 'package:flutter/material.dart';

// class About extends StatefulWidget {
//   const About({super.key});

//   @override
//   State<About> createState() => _AboutState();
// }

// class _AboutState extends State<About> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: Text("about us"),
//     );
//   }
// }


import 'package:flutter/material.dart';

class About extends StatelessWidget {
  const About({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[100],
      appBar: AppBar(
        title: const Text("About EV Market"),
        backgroundColor: Colors.green.shade700,
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header Image
            ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: Image.network(
                      'https://cbvalueaddrealty.in/wp-content/uploads/2022/07/electric-vehicle.jpg',
                height: 200,
                width: double.infinity,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(height: 20),

            // Title
            const Text(
              "Welcome to EV Market",
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: Colors.black87),
            ),
            const SizedBox(height: 10),

            // About Text
            const Text(
              "EV Market is your one-stop platform for exploring, comparing, "
              "and purchasing the latest electric vehicles. From eco-friendly bikes "
              "to advanced electric cars, we bring you detailed specifications, "
              "real-world range, and the best showroom deals in one place.",
              style: TextStyle(fontSize: 16, height: 1.4),
            ),
            const SizedBox(height: 20),

            // Mission
            const Text(
              "Our Mission",
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Colors.black87),
            ),
            const SizedBox(height: 8),
            const Text(
              "To accelerate the adoption of sustainable transportation "
              "by connecting buyers with trusted EV dealers, providing accurate data, "
              "and promoting green mobility for a cleaner future.",
              style: TextStyle(fontSize: 16, height: 1.4),
            ),
            const SizedBox(height: 20),

            // Vision
            const Text(
              "Our Vision",
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Colors.black87),
            ),
            const SizedBox(height: 8),
            const Text(
              "To become the most trusted platform for electric vehicle information "
              "and sales, making EVs accessible to everyone, everywhere.",
              style: TextStyle(fontSize: 16, height: 1.4),
            ),
            const SizedBox(height: 20),

            // Contact
            const Text(
              "Contact Us",
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Colors.black87),
            ),
            const SizedBox(height: 8),
            Row(
              children: const [
                Icon(Icons.email, color: Colors.green),
                SizedBox(width: 8),
                Text("support@evmarket.com", style: TextStyle(fontSize: 16)),
              ],
            ),
            const SizedBox(height: 6),
            Row(
              children: const [
                Icon(Icons.phone, color: Colors.green),
                SizedBox(width: 8),
                Text("+91 98765 43210", style: TextStyle(fontSize: 16)),
              ],
            ),
            const SizedBox(height: 6),
            Row(
              children: const [
                Icon(Icons.location_on, color: Colors.green),
                SizedBox(width: 8),
                Text("Mumbai, India", style: TextStyle(fontSize: 16)),
              ],
            ),
            const SizedBox(height: 30),

            Center(
              child: Text(
                "© 2025 EV Market - All Rights Reserved",
                style: TextStyle(color: Colors.grey[600]),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
