// import 'package:ev_market/services/api_service.dart';
// import 'package:flutter/material.dart';
// import 'dart:io';
// import 'package:image_picker/image_picker.dart';

// class TwoForm extends StatefulWidget {
//   const TwoForm({super.key});

//   @override
//   State<TwoForm> createState() => _TwoFormState();
// }

// class _TwoFormState extends State<TwoForm> {
//   final TextEditingController _type = TextEditingController();
//   final TextEditingController _brand = TextEditingController();
//   final TextEditingController _upcomming_and_used = TextEditingController();
//   final TextEditingController _vehicle_name = TextEditingController();
//   File? _selectedImage;

//   Future<void> _pickImage() async {
//     final ImagePicker picker = ImagePicker();
//     final XFile? pickedImage = await picker.pickImage(
//       source: ImageSource.gallery,
//     );

//     if (pickedImage != null) {
//       setState(() {
//         _selectedImage = File(pickedImage.path);
//       });
//     }
//   }

//   Future<void> _submitForm() async {
//     if (_vehicle_name.text.isEmpty || _selectedImage == null) {
//       ScaffoldMessenger.of(context).showSnackBar(
//         const SnackBar(content: Text("Please enter brand name and logo")),
//       );
//       return;
//     }

//     try {
//       await ApiService().addTwoData(_type.text, _brand.text, _upcomming_and_used.text, _vehicle_name.text, _selectedImage!,);

//       ScaffoldMessenger.of(context).showSnackBar(
//         const SnackBar(content: Text("Two Wheeler data add successfully"))
//       );


//     } catch (e) {
//       throw Exception("Error : $e");
//     }

//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(title: Text("Two Form")),
//       body: Padding(
//         padding: EdgeInsets.all(16),
//         child: Column(
//           children: [
//             // Row(
//             //   mainAxisAlignment: MainAxisAlignment.start,
//             //   children: [
//             //     TextField(
//             //       decoration: InputDecoration(
//             //         border: OutlineInputBorder(),
//             //         labelText: "Type",
//             //       ),
//             //     ),
//             //     TextField(
//             //       decoration: InputDecoration(
//             //         border: OutlineInputBorder(),
//             //         labelText: "Brand",
//             //       ),
//             //     ),
//             //   ],
//             // ),
//             Row(
//               mainAxisAlignment: MainAxisAlignment.start,
//               children: [
//                 Flexible(
//                   child: TextField(
//                     controller: _type,
//                     decoration: InputDecoration(
//                       border: OutlineInputBorder(),
//                       labelText: "Type",
//                     ),
//                   ),
//                 ),
//                 SizedBox(width: 16), // space between the two fields
//                 Flexible(
//                   child: TextField(
//                     controller: _brand,
//                     decoration: InputDecoration(
//                       border: OutlineInputBorder(),
//                       labelText: "Brand",
//                     ),
//                   ),
//                 ),
//               ],
//             ),

//             TextField(
//               controller: _vehicle_name,
//               decoration: InputDecoration(
//                 border: OutlineInputBorder(),
//                 labelText: "Vehicle Name",
//               ),
//             ),
//             TextField(
//               controller: _upcomming_and_used,
//               decoration: InputDecoration(
//                 border: OutlineInputBorder(),
//                 labelText: "Upcomming & Used",
//               ),
//             ),

//             GestureDetector(
//               onTap: _pickImage,
//               child: _selectedImage == null
//                   ? Container(
//                       height: 120,
//                       width: 120,
//                       decoration: BoxDecoration(
//                         border: Border.all(color: Colors.grey),
//                         borderRadius: BorderRadius.circular(12),
//                       ),
//                       child: const Icon(Icons.add_a_photo, size: 40),
//                     )
//                   : ClipRRect(
//                       borderRadius: BorderRadius.circular(12),
//                       child: Image.file(
//                         _selectedImage!,
//                         height: 120,
//                         width: 120,
//                         fit: BoxFit.cover,
//                       ),
//                     ),
//             ),

//             ElevatedButton(onPressed: _submitForm, child: Text("Save")),
//           ],
//         ),
//       ),
//     );
//   }
// }




import 'package:ev_market/services/api_service.dart';
import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker/image_picker.dart';

class TwoForm extends StatefulWidget {
  const TwoForm({super.key});

  @override
  State<TwoForm> createState() => _TwoFormState();
}

class _TwoFormState extends State<TwoForm> {
  final _type = TextEditingController();
  final _brand = TextEditingController();
  final _upcomming_and_used = TextEditingController();
  final _vehicle_name = TextEditingController();
  final _speed = TextEditingController();
  final _range = TextEditingController();
  final _motor_power = TextEditingController();
  final _battery = TextEditingController();
  final _charging_time = TextEditingController();
  final _battery_charger = TextEditingController();
  final _showroom_price = TextEditingController();
  final _color = TextEditingController();

  File? _img1, _img2, _img3;

  Future<void> _pickImage(int index) async {
    final ImagePicker picker = ImagePicker();
    final XFile? picked = await picker.pickImage(source: ImageSource.gallery);

    if (picked != null) {
      setState(() {
        if (index == 1) _img1 = File(picked.path);
        if (index == 2) _img2 = File(picked.path);
        if (index == 3) _img3 = File(picked.path);
      });
    }
  }

  Future<void> _submitForm() async {
    if (_img1 == null || _img2 == null || _img3 == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("⚠️ Please add all 3 images")),
      );
      return;
    }

    try {
      await ApiService().addTwoData(
        _type.text,
        _brand.text,
        _upcomming_and_used.text,
        _vehicle_name.text,
        _speed.text,
        _range.text,
        _motor_power.text,
        _battery.text,
        _charging_time.text,
        _battery_charger.text,
        _showroom_price.text,
        _color.text,
        _img1!,
        _img2!,
        _img3!,
      );

      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("✅ Two-Wheeler Added Successfully")),
      );

      setState(() {}); // 🔄 refresh page for now

    } catch (e) {
      throw Exception("Error: $e");
    }
  }

  Widget _buildTextField(String label, TextEditingController controller) {
    return TextField(
      controller: controller,
      decoration: InputDecoration(
        labelText: label,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
        filled: true,
        fillColor: Colors.grey[100],
      ),
    );
  }

  Widget _buildImagePicker(int index, File? image, String alt) {
    return GestureDetector(
      onTap: () => _pickImage(index),
      child: Container(
        width: 100,
        height: 100,
        decoration: BoxDecoration(
          border: Border.all(color: Colors.grey),
          borderRadius: BorderRadius.circular(10),
        ),
        child: image == null
            ? Center(child: Text(alt, style: TextStyle(color: Colors.grey)))
            : ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: Image.file(image, fit: BoxFit.cover),
              ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("🚴 Add Two-Wheeler")),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            Row(
              children: [
                Expanded(child: _buildTextField("Type", _type)),
                const SizedBox(width: 12),
                Expanded(child: _buildTextField("Brand", _brand)),
              ],
            ),
            const SizedBox(height: 12),
            _buildTextField("Vehicle Name", _vehicle_name),
            const SizedBox(height: 12),
            _buildTextField("Upcoming & Used", _upcomming_and_used),
            const SizedBox(height: 12),
            _buildTextField("Speed", _speed),
            const SizedBox(height: 12),
            _buildTextField("Range", _range),
            const SizedBox(height: 12),
            _buildTextField("Motor Power", _motor_power),
            const SizedBox(height: 12),
            _buildTextField("Battery", _battery),
            const SizedBox(height: 12),
            _buildTextField("Charging Time", _charging_time),
            const SizedBox(height: 12),
            _buildTextField("Battery Charger", _battery_charger),
            const SizedBox(height: 12),
            _buildTextField("Showroom Price", _showroom_price),
            const SizedBox(height: 12),
            _buildTextField("Color", _color),
            const SizedBox(height: 20),

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _buildImagePicker(1, _img1, "Img1"),
                _buildImagePicker(2, _img2, "Img2"),
                _buildImagePicker(3, _img3, "Img3"),
              ],
            ),

            const SizedBox(height: 30),

            ElevatedButton.icon(
              onPressed: _submitForm,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.blue,
                padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 14),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              icon: const Icon(Icons.save, color: Colors.white),
              label: const Text("Save", style: TextStyle(fontSize: 18, color: Colors.white)),
            ),
          ],
        ),
      ),
    );
  }
}

