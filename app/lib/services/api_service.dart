import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;

class ApiService {
  // Backend URL (Vercel)
  static const String baseUrl = 'https://ev-market-server.vercel.app';

  static Future<List<dynamic>> fetchTwoWheelerData() async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/admin/getTwoWheeler'),
      );

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded; // API direct list return kar rahi hai
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load two-wheeler data");
      }
    } catch (e) {
      throw Exception("Error fetching two-wheeler data: $e");
    }
  }

  static Future<List<dynamic>> fetchBikeUsedData() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/getBikeUsed'));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded;
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load used bike data");
      }
    } catch (e) {
      throw Exception("Error fetching used bike data: $e");
    }
  }

  static Future<List<dynamic>> fetchBikeUpcomingData() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/getBikeUpcoming'));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded;
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load upcoming bike data");
      }
    } catch (e) {
      throw Exception("Error fetching upcoming bike data: $e");
    }
  }

  static Future<List<dynamic>> fetchBrandData() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/admin/getBrand'));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded;
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load brand data");
      }
    } catch (e) {
      throw Exception("Error fetching brand data: $e");
    }
  }

  static Future<List<dynamic>> fetchBikeData() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/getBikeData'));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded;
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load bike data");
      }
    } catch (e) {
      throw Exception("Error fetching bike data: $e");
    }
  }

  static Future<List<dynamic>> fetchScooterData() async {
    try {
       final response = await http.get(Uri.parse('$baseUrl/getScooterData'));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded;
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load Scooter data");
      }
    } catch (e) {
      throw Exception("Error fetching Scooter data: $e");
    }
  }

    static Future<List<dynamic>> fetchScooterUsedData() async {
    try {
       final response = await http.get(Uri.parse('$baseUrl/getScooterUsed'));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded;
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load Used Scooter data");
      }
    } catch (e) {
      throw Exception("Error fetching Used Scooter data: $e");
    }
  }

    static Future<List<dynamic>> fetchScooterUpcomingData() async {
    try {
       final response = await http.get(Uri.parse('$baseUrl/getScooterUpcoming'));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded;
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load Upcoming Scooter data");
      }
    } catch (e) {
      throw Exception("Error fetching Upcoming Scooter data: $e");
    }
  }

  static Future<List<dynamic>> fetchCarData() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/getCarData'));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded;
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load car data");
      }
    } catch (e) {
      throw Exception("Error fetching car data: $e");
    }
  }

      static Future<List<dynamic>> fetchCarUpcomingData() async {
    try {
       final response = await http.get(Uri.parse('$baseUrl/getCarUpcoming'));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded;
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load Upcoming Car data");
      }
    } catch (e) {
      throw Exception("Error fetching Upcoming Car data: $e");
    }
  }

      static Future<List<dynamic>> fetchCarUsedData() async {
    try {
       final response = await http.get(Uri.parse('$baseUrl/getScooterUsed'));

      if (response.statusCode == 200) {
        final decoded = jsonDecode(response.body);

        if (decoded is List) {
          return decoded;
        } else {
          throw Exception("Unexpected response format: $decoded");
        }
      } else {
        throw Exception("Failed to load Used Car data");
      }
    } catch (e) {
      throw Exception("Error fetching Used Car data: $e");
    }
  }

  // ADD BRAND (with image upload)
  Future<void> addBrand(String brandName, File brandLogo) async {
    var request = http.MultipartRequest(
      'POST',
      Uri.parse('$baseUrl/admin/addBrand'),
    );

    // brand_name field
    request.fields['brand_name'] = brandName;

    // brand_logo (file upload)
    request.files.add(
      await http.MultipartFile.fromPath('brand_logo', brandLogo.path),
    );

    // send request
    var response = await request.send();

    if (response.statusCode == 200 || response.statusCode == 201) {
      var respStr = await response.stream.bytesToString();
      print("✅ Brand Added: $respStr");
    } else {
      throw Exception('Failed to add brand. Status: ${response.statusCode}');
    }
  }

  Future<void> addTwoData(
    String type,
    String brand,
    String upcomming_and_used,
    String vehicle_name,
    String speed,
    String range,
    String motor_power,
    String battery,
    String charging_time,
    String battery_charger,
    String showroom_price,
    String color,
    File img1,
    File img2,
    File img3,
  ) async {
    var request = http.MultipartRequest(
      "POST",
      Uri.parse('$baseUrl/admin/addTwoWheeler'),
    );

    request.fields['type'] = type;
    request.fields['brand'] = brand;
    request.fields['upcomming_and_used'] = upcomming_and_used;
    request.fields['vehicle_name'] = vehicle_name;
    request.fields['speed'] = speed;
    request.fields['range'] = range;
    request.fields['motor_power'] = motor_power;
    request.fields['battery'] = battery;
    request.fields['charging_time'] = charging_time;
    request.fields['battery_charger'] = battery_charger;
    request.fields['showroom_price'] = showroom_price;
    request.fields['color'] = color;

    request.files.add(await http.MultipartFile.fromPath('img1', img1.path));
    request.files.add(await http.MultipartFile.fromPath('img2', img2.path));
    request.files.add(await http.MultipartFile.fromPath('img3', img3.path));

    var response = await request.send();

    if (response.statusCode == 200 || response.statusCode == 201) {
      var respStr = await response.stream.bytesToString();
      print("✅ Two-Wheeler Added: $respStr");
    } else {
      throw Exception(
        'Failed to add two-wheeler. Status: ${response.statusCode}',
      );
    }
  }


}
