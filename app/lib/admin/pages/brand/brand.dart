import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:ev_market/services/api_service.dart';

class BrandPage extends StatefulWidget {
  const BrandPage({super.key});

  @override
  State<BrandPage> createState() => _BrandPageState();
}

class _BrandPageState extends State<BrandPage> {
  final TextEditingController _brandController = TextEditingController();
  final ApiService _apiService = ApiService();

  File? _selectedImage;

  // Image Picker
  Future<void> _pickImage() async {
    final ImagePicker picker = ImagePicker();
    final XFile? pickedImage =
        await picker.pickImage(source: ImageSource.gallery);

    if (pickedImage != null) {
      setState(() {
        _selectedImage = File(pickedImage.path);
      });
    }
  }

  // Submit Form
  Future<void> _submitForm() async {
    if (_brandController.text.isEmpty || _selectedImage == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("Please enter brand name and logo")),
      );
      return;
    }

    try {
      await _apiService.addBrand(
        _brandController.text,
        _selectedImage!,
      );

      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("✅ Brand added successfully")),
      );

      _brandController.clear();
      setState(() => _selectedImage = null);

    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("❌ Error: $e")),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Add Brand")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Brand Name
            TextField(
              controller: _brandController,
              decoration: const InputDecoration(
                labelText: "Brand Name",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 20),

            // Brand Logo Picker
            GestureDetector(
              onTap: _pickImage,
              child: _selectedImage == null
                  ? Container(
                      height: 120,
                      width: 120,
                      decoration: BoxDecoration(
                        border: Border.all(color: Colors.grey),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: const Icon(Icons.add_a_photo, size: 40),
                    )
                  : ClipRRect(
                      borderRadius: BorderRadius.circular(12),
                      child: Image.file(
                        _selectedImage!,
                        height: 120,
                        width: 120,
                        fit: BoxFit.cover,
                      ),
                    ),
            ),
            const SizedBox(height: 20),

            // Submit Button
            ElevatedButton(
              onPressed: _submitForm,
              child: const Text("Submit"),
            ),
          ],
        ),
      ),
    );
  }
}

