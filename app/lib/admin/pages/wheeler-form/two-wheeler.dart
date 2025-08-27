import 'package:ev_market/admin/pages/wheeler-form/two-form.dart';
import 'package:flutter/material.dart';
import 'package:ev_market/services/api_service.dart';

class TwoWheelerForm extends StatefulWidget {
  const TwoWheelerForm({super.key});

  @override
  State<TwoWheelerForm> createState() => _TwoWheelerFormState();
}

class _TwoWheelerFormState extends State<TwoWheelerForm> {
  late Future<List<dynamic>> _twoWheelerData;

  @override
  void initState() {
    super.initState();
    _twoWheelerData = ApiService.fetchTwoWheelerData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Two Wheeler List")),
      body: Column(
        children: [
          //  leading: TextButton(
          //           style: ButtonStyle(
          //             // ---------- working [ change bgcolor when i am hover button ]
          //           ),
          //           onPressed: () {
          //             Navigator.push(
          //               context,
          //               MaterialPageRoute(builder: (context) => About()),
          //             );
          //           },
          //           child: Text("About Us"),
          //         ),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => TwoForm()),
              );
            },
            child: Text("data"),
          ),
          Expanded(
            child: FutureBuilder<List<dynamic>>(
              future: _twoWheelerData,
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return const Center(child: CircularProgressIndicator());
                }

                if (snapshot.hasError) {
                  return Center(child: Text("Error: ${snapshot.error}"));
                }

                if (!snapshot.hasData || snapshot.data!.isEmpty) {
                  return const Center(child: Text("No data found"));
                }

                final data = snapshot.data!;

                return SingleChildScrollView(
                  scrollDirection: Axis.vertical,
                  child: SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: DataTable(
                      columnSpacing: 20,
                      columns: const [
                        DataColumn(label: Text('Name')),
                        DataColumn(label: Text('Type')),
                        DataColumn(label: Text('Brand')),
                        DataColumn(label: Text('Price')),
                        DataColumn(label: Text('Color')),
                        DataColumn(label: Text('Battery')),
                        DataColumn(label: Text('Upcoming & Used')),
                        DataColumn(label: Text('Speed')),
                        DataColumn(label: Text("Image")),
                      ],
                      rows: data.map((item) {
                        return DataRow(
                          cells: [
                            DataCell(Text(item['vehicle_name'] ?? '')),
                            DataCell(Text(item['type'] ?? '')),
                            DataCell(Text(item['brand'] ?? '')),
                            DataCell(Text(item['showroom_price'] ?? '')),
                            DataCell(Text(item['color'] ?? '')),
                            DataCell(Text(item['battery'] ?? '')),
                            DataCell(Text(item['upcomming_and_used'] ?? '')),
                            DataCell(Text(item['speed'] ?? '')),
                            DataCell(
                              Image.network(
                                item['img1'] ?? '',
                                height: 50,
                                width: 50,
                                fit: BoxFit.cover,
                              ),
                            ),
                          ],
                        );
                      }).toList(),
                    ),
                  ),
                );
              },
            ),
          ),
          _TextSection(),
        ],
      ),
    );
  }

  Widget _TextSection() {
    return const Padding(
      padding: EdgeInsets.all(16.0),
      child: Text(
        "Hello World",
        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
      ),
    );
  }
}
