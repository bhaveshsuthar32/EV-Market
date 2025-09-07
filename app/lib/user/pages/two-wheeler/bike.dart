// import 'package:ev_market/services/api_service.dart';
// import 'package:ev_market/user/pages/two-wheeler/bike_details.dart';
// import 'package:flutter/material.dart';

// class Bike extends StatefulWidget {
//   const Bike({super.key});

//   @override
//   State<Bike> createState() => _BikeState();
// }

// class _BikeState extends State<Bike> {
//   bool isChecked = false;
//   late Future<List<dynamic>> allBikeData;

//   @override
//   void initState() {
//     super.initState();
//     allBikeData = ApiService.fetchBikeData();
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       backgroundColor: Colors.grey[100],
//       body: SafeArea(
//         child: FutureBuilder<List<dynamic>>(
//           future: allBikeData,
//           builder: (context, snapshot) {
//             if (snapshot.connectionState == ConnectionState.waiting) {
//               return const Center(child: CircularProgressIndicator());
//             }

//             if (snapshot.hasError) {
//               return Center(child: Text("Error: ${snapshot.error}"));
//             }

//             if (!snapshot.hasData || snapshot.data!.isEmpty) {
//               return const Center(child: Text("No data found"));
//             }

//             final data = snapshot.data!;

//             return CustomScrollView(
//               slivers: [
//                 // App Bar / Header
//                 SliverAppBar(
//                   backgroundColor: Colors.green.shade700,
//                   pinned: true,
//                   expandedHeight: 80,
//                   flexibleSpace: FlexibleSpaceBar(
//                     titlePadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
//                     title: Row(
//                       children: [
//                         const Text(
//                           "E-Bike for Sale ",
//                           style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
//                         ),
//                         Text(
//                           "(Showing ${data.length})",
//                           style: TextStyle(fontSize: 16, color: Colors.red.shade300),
//                         ),
//                       ],
//                     ),
//                   ),
//                 ),

//                 // Grid
//                 SliverPadding(
//                   padding: const EdgeInsets.all(12),
//                   sliver: SliverGrid(
//                     delegate: SliverChildBuilderDelegate(
//                       (context, index) {
//                         final item = data[index];
//                         return Container(
//                           decoration: BoxDecoration(
//                             color: Colors.white,
//                             borderRadius: BorderRadius.circular(16),
//                             boxShadow: [
//                               BoxShadow(
//                                 color: Colors.black26,
//                                 blurRadius: 6,
//                                 offset: const Offset(0, 3),
//                               ),
//                             ],
//                           ),
//                           padding: const EdgeInsets.all(12),
//                           child: Column(
//                             crossAxisAlignment: CrossAxisAlignment.start,
//                             children: [
//                               // Image
//                               ClipRRect(
//                                 borderRadius: BorderRadius.circular(12),
//                                 child: Image.network(
//                                   item['img1'] ?? '',
//                                   height: 150,
//                                   width: double.infinity,
//                                   fit: BoxFit.cover,
//                                   errorBuilder: (context, error, stackTrace) {
//                                     return Container(
//                                       height: 150,
//                                       color: Colors.grey[300],
//                                       child: const Icon(Icons.broken_image, size: 50, color: Colors.grey),
//                                     );
//                                   },
//                                 ),
//                               ),
//                               const SizedBox(height: 10),

//                               // Title
//                               Text(
//                                 item['vehicle_name'] ?? '',
//                                 style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
//                                 maxLines: 1,
//                                 overflow: TextOverflow.ellipsis,
//                               ),
//                               const SizedBox(height: 4),

//                               // Price
//                               Row(
//                                 children: [
//                                   const Icon(Icons.currency_rupee, size: 16),
//                                   Text(item['showroom_price'] ?? ''),
//                                 ],
//                               ),
//                               const SizedBox(height: 8),

//                               // Specs
//                               Row(
//                                 mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                                 children: [
//                                   Column(
//                                     children: [
//                                       const Text("Motor", style: TextStyle(fontWeight: FontWeight.w600)),
//                                       Text(item['motor_power'] ?? ''),
//                                     ],
//                                   ),
//                                   Column(
//                                     children: [
//                                       const Text("Range", style: TextStyle(fontWeight: FontWeight.w600)),
//                                       Text(item['range'] ?? ''),
//                                     ],
//                                   ),
//                                   Column(
//                                     children: [
//                                       const Text("Battery", style: TextStyle(fontWeight: FontWeight.w600)),
//                                       Text(item['battery'] ?? ''),
//                                     ],
//                                   ),
//                                 ],
//                               ),
//                               const Spacer(),

//                               // Button
//                               ElevatedButton(
//                                 style: ElevatedButton.styleFrom(
//                                   backgroundColor: Colors.green.shade700,
//                                   shape: RoundedRectangleBorder(
//                                     borderRadius: BorderRadius.circular(8),
//                                   ),
//                                 ),
//                                 onPressed: () {
//                                   Navigator.push(
//                                     context,
//                                     MaterialPageRoute(builder: (_) => BikeDetails()),
//                                   );
//                                 },
//                                 child: const Text("Get Details", style: TextStyle(color: Colors.white)),
//                               ),
//                             ],
//                           ),
//                         );
//                       },
//                       childCount: data.length,
//                     ),
//                     gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
//                       crossAxisCount: 2,
//                       mainAxisSpacing: 12,
//                       crossAxisSpacing: 12,
//                       mainAxisExtent: 350,
//                     ),
//                   ),
//                 ),
//               ],
//             );
//           },
//         ),
//       ),
//     );
//   }
// }

// import 'package:ev_market/services/api_service.dart';
// import 'package:ev_market/user/pages/two-wheeler/bike_details.dart';
// import 'package:flutter/material.dart';
// import 'package:animate_do/animate_do.dart';

// class Bike extends StatefulWidget {
//   const Bike({super.key});

//   @override
//   State<Bike> createState() => _BikeState();
// }

// class _BikeState extends State<Bike> {
//   late Future<List<dynamic>> allBikeData;
//   List<dynamic> _allData = [];
//   List<dynamic> _filteredData = [];
//   final TextEditingController _searchController = TextEditingController();

//   @override
//   void initState() {
//     super.initState();
//     allBikeData = ApiService.fetchBikeData();
//     allBikeData.then((value) {
//       setState(() {
//         _allData = value;
//         _filteredData = value;
//       });
//     });
//     _searchController.addListener(_onSearchChanged);
//   }

//   void _onSearchChanged() {
//     String query = _searchController.text.toLowerCase();
//     setState(() {
//       _filteredData = _allData.where((item) {
//         final name = (item['vehicle_name'] ?? '').toString().toLowerCase();
//         return name.contains(query);
//       }).toList();
//     });
//   }

//   @override
//   void dispose() {
//     _searchController.dispose();
//     super.dispose();
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       backgroundColor: Colors.grey[100],
//       body: SafeArea(
//         child: FutureBuilder<List<dynamic>>(
//           future: allBikeData,
//           builder: (context, snapshot) {
//             if (snapshot.connectionState == ConnectionState.waiting) {
//               return const Center(child: CircularProgressIndicator());
//             }

//             if (snapshot.hasError) {
//               return Center(child: Text("Error: ${snapshot.error}"));
//             }

//             if (!snapshot.hasData || snapshot.data!.isEmpty) {
//               return const Center(child: Text("No bikes found"));
//             }

//             return CustomScrollView(
//               slivers: [
//                 // ✅ App Bar + Search
//                 SliverAppBar(
//                   backgroundColor: Colors.green.shade700,
//                   pinned: true,
//                   floating: true,
//                   expandedHeight: 130,
//                   flexibleSpace: FlexibleSpaceBar(
//                     background: Padding(
//                       padding: const EdgeInsets.only(top: 70, left: 16, right: 16),
//                       child: Container(
//                         padding: const EdgeInsets.symmetric(horizontal: 12),
//                         decoration: BoxDecoration(
//                           color: Colors.white,
//                           borderRadius: BorderRadius.circular(12),
//                         ),
//                         child: TextField(
//                           controller: _searchController,
//                           decoration: const InputDecoration(
//                             hintText: "Search bikes...",
//                             border: InputBorder.none,
//                             icon: Icon(Icons.search, color: Colors.grey),
//                           ),
//                         ),
//                       ),
//                     ),
//                     titlePadding: const EdgeInsets.only(left: 16, bottom: 60),
//                     title: const Text("Electric Bikes", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
//                   ),
//                 ),

//                 // ✅ Filtered Grid
//                 SliverPadding(
//                   padding: const EdgeInsets.all(12),
//                   sliver: SliverGrid(
//                     delegate: SliverChildBuilderDelegate(
//                       (context, index) {
//                         final item = _filteredData[index];
//                         return FadeInUp(
//                           duration: Duration(milliseconds: 300 + (index * 100)),
//                           child: Container(
//                             decoration: BoxDecoration(
//                               color: Colors.white,
//                               borderRadius: BorderRadius.circular(16),
//                               boxShadow: [
//                                 BoxShadow(
//                                   color: Colors.black.withOpacity(0.1),
//                                   blurRadius: 6,
//                                   offset: const Offset(0, 3),
//                                 ),
//                               ],
//                             ),
//                             child: Column(
//                               crossAxisAlignment: CrossAxisAlignment.start,
//                               children: [
//                                 ClipRRect(
//                                   borderRadius: const BorderRadius.vertical(top: Radius.circular(16)),
//                                   child: Image.network(
//                                     item['img1'] ?? '',
//                                     height: 150,
//                                     width: double.infinity,
//                                     fit: BoxFit.cover,
//                                   ),
//                                 ),
//                                 Padding(
//                                   padding: const EdgeInsets.all(10),
//                                   child: Column(
//                                     crossAxisAlignment: CrossAxisAlignment.start,
//                                     children: [
//                                       Text(
//                                         item['vehicle_name'] ?? '',
//                                         style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
//                                         maxLines: 1,
//                                         overflow: TextOverflow.ellipsis,
//                                       ),
//                                       const SizedBox(height: 6),
//                                       Row(
//                                         children: [
//                                           const Icon(Icons.currency_rupee, size: 16, color: Colors.green),
//                                           Text(item['showroom_price'] ?? '',
//                                               style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600)),
//                                         ],
//                                       ),
//                                     ],
//                                   ),
//                                 ),
//                               ],
//                             ),
//                           ),
//                         );
//                       },
//                       childCount: _filteredData.length,
//                     ),
//                     gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
//                       crossAxisCount: 2,
//                       mainAxisSpacing: 12,
//                       crossAxisSpacing: 12,
//                       mainAxisExtent: 250,
//                     ),
//                   ),
//                 ),
//               ],
//             );
//           },
//         ),
//       ),
//     );
//   }
// }

import 'package:ev_market/services/api_service.dart';
import 'package:ev_market/user/pages/two-wheeler/bike_details.dart';
import 'package:flutter/material.dart';
import 'package:animate_do/animate_do.dart';

class Bike extends StatefulWidget {
  const Bike({super.key});

  @override
  State<Bike> createState() => _BikeState();
}

class _BikeState extends State<Bike> {
  late Future<List<dynamic>> allBikeData;
  List<dynamic> _allData = [];
  List<dynamic> _filteredData = [];
  final TextEditingController _searchController = TextEditingController();

  @override
  void initState() {
    super.initState();
    allBikeData = ApiService.fetchBikeData();
    allBikeData.then((value) {
      setState(() {
        _allData = value;
        _filteredData = value;
      });
    });
    _searchController.addListener(_onSearchChanged);
  }

  void _onSearchChanged() {
    String query = _searchController.text.toLowerCase();
    setState(() {
      _filteredData = _allData.where((item) {
        final name = (item['vehicle_name'] ?? '').toString().toLowerCase();
        return name.contains(query);
      }).toList();
    });
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[100],
      body: SafeArea(
        child: FutureBuilder<List<dynamic>>(
          future: allBikeData,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return const Center(child: CircularProgressIndicator());
            }

            if (snapshot.hasError) {
              return Center(child: Text("Error: ${snapshot.error}"));
            }

            if (!snapshot.hasData || snapshot.data!.isEmpty) {
              return const Center(child: Text("No bikes found"));
            }

            return CustomScrollView(
              slivers: [
                // ✅ Modern AppBar with Search
                // SliverAppBar(

                //   // backgroundColor: const Color.fromARGB(255, 44, 109, 188),
                //   backgroundColor: Colors.grey[100],
                //   pinned: true,
                //   floating: true,
                //   expandedHeight: 140,
                //   toolbarHeight: 150,
                //   flexibleSpace: FlexibleSpaceBar(
                //     background: Padding(
                //       padding: const EdgeInsets.only(top: 40, left: 16, right: 16),
                //       child: Column(
                //         crossAxisAlignment: CrossAxisAlignment.start,

                //         children: [
                //           const Text(
                //             "Electric Bikes",
                //             style: TextStyle(
                //                 fontSize: 22, fontWeight: FontWeight.bold, color: Color.fromARGB(255, 48, 47, 47)),
                //           ),
                //           const SizedBox(height: 10),
                //           Container(
                //             padding: const EdgeInsets.symmetric(horizontal: 12),
                //             decoration: BoxDecoration(
                //               color: Colors.white,
                //               borderRadius: BorderRadius.circular(12),
                //             ),
                //             child: TextField(
                //               controller: _searchController,
                //               decoration: const InputDecoration(
                //                 hintText: "Search bikes...",
                //                 border: InputBorder.none,
                //                 icon: Icon(Icons.search, color: Colors.grey),
                //               ),
                //             ),
                //           ),
                //         ],
                //       ),
                //     ),
                //   ),
                // ),
                SliverAppBar(
                  backgroundColor: Colors.grey[100],
                  pinned: true,
                  floating: true,
                  expandedHeight: 140,
                  toolbarHeight: 150,
                  automaticallyImplyLeading:
                      true, // 🔥 back arrow enable karega
                  leading: IconButton(
                    icon: const Icon(
                      Icons.arrow_back,
                      color: Colors.black,
                    ), // back icon
                    onPressed: () {
                      Navigator.pop(
                        context,
                      ); // 🔥 pichle page pe wapas le jayega
                    },
                  ),
                  flexibleSpace: FlexibleSpaceBar(
                    background: Padding(
                      padding: const EdgeInsets.only(
                        top: 40,
                        left: 16,
                        right: 16,
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            "Electric Bikes",
                            style: TextStyle(
                              fontSize: 22,
                              fontWeight: FontWeight.bold,
                              color: Color.fromARGB(255, 48, 47, 47),
                            ),
                          ),
                          const SizedBox(height: 10),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 12),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: TextField(
                              controller: _searchController,
                              decoration: const InputDecoration(
                                hintText: "Search bikes...",
                                border: InputBorder.none,
                                icon: Icon(Icons.search, color: Colors.grey),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),

                // ✅ Grid with details
                SliverPadding(
                  padding: const EdgeInsets.all(12),
                  sliver: SliverGrid(
                    delegate: SliverChildBuilderDelegate((context, index) {
                      final item = _filteredData[index];
                      return FadeInUp(
                        duration: Duration(milliseconds: 300 + (index * 80)),
                        child: Container(
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(16),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withOpacity(0.1),
                                blurRadius: 6,
                                offset: const Offset(0, 3),
                              ),
                            ],
                          ),
                          padding: const EdgeInsets.all(12),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              // ✅ Image
                              ClipRRect(
                                borderRadius: BorderRadius.circular(12),
                                child: Image.network(
                                  item['img1'] ?? '',
                                  height: 130,
                                  width: double.infinity,
                                  fit: BoxFit.cover,
                                  errorBuilder: (context, error, stackTrace) {
                                    return Container(
                                      height: 130,
                                      color: Colors.grey[300],
                                      child: const Icon(
                                        Icons.broken_image,
                                        size: 50,
                                        color: Colors.grey,
                                      ),
                                    );
                                  },
                                ),
                              ),
                              const SizedBox(height: 8),

                              // ✅ Title
                              Text(
                                item['vehicle_name'] ?? '',
                                style: const TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 16,
                                ),
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                              ),
                              const SizedBox(height: 4),

                              // ✅ Price
                              Row(
                                children: [
                                  const Icon(
                                    Icons.currency_rupee,
                                    size: 16,
                                    color: Colors.green,
                                  ),
                                  Text(
                                    item['showroom_price'] ?? '',
                                    style: const TextStyle(
                                      fontSize: 15,
                                      fontWeight: FontWeight.w600,
                                    ),
                                  ),
                                ],
                              ),
                              const SizedBox(height: 8),

                              // ✅ Specs
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Column(
                                    children: [
                                      const Text(
                                        "Motor",
                                        style: TextStyle(
                                          fontWeight: FontWeight.w600,
                                        ),
                                      ),
                                      Text(item['motor_power'] ?? ''),
                                    ],
                                  ),
                                  Column(
                                    children: [
                                      const Text(
                                        "Range",
                                        style: TextStyle(
                                          fontWeight: FontWeight.w600,
                                        ),
                                      ),
                                      Text(item['range'] ?? ''),
                                    ],
                                  ),
                                  Column(
                                    children: [
                                      const Text(
                                        "Battery",
                                        style: TextStyle(
                                          fontWeight: FontWeight.w600,
                                        ),
                                      ),
                                      Text(item['battery'] ?? ''),
                                    ],
                                  ),
                                ],
                              ),
                              const Spacer(),

                              // ✅ Button
                              SizedBox(
                                width: double.infinity,
                                child: ElevatedButton(
                                  style: ElevatedButton.styleFrom(
                                    backgroundColor: Colors.green.shade700,
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(8),
                                    ),
                                  ),
                                  onPressed: () {
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                        builder: (_) => BikeDetails(
                                          // bikeData: item, // 🔥 Pass full data
                                        ),
                                      ),
                                    );
                                  },
                                  child: const Text(
                                    "Get Details",
                                    style: TextStyle(color: Colors.white),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    }, childCount: _filteredData.length),
                    gridDelegate:
                        const SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: 2,
                          mainAxisSpacing: 12,
                          crossAxisSpacing: 12,
                          mainAxisExtent: 330,
                        ),
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}
