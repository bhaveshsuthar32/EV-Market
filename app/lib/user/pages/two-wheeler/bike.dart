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
//         child: SingleChildScrollView(
//           padding: const EdgeInsets.all(12),
//           child: Column(
//             crossAxisAlignment: CrossAxisAlignment.start,
//             children: [
//               // Header Section (fixed on top)
//               Container(
//                 width: double.infinity,
//                 padding: const EdgeInsets.symmetric(
//                   vertical: 24,
//                   horizontal: 20,
//                 ),
//                 decoration: BoxDecoration(
//                   color: Colors.green.shade700,
//                   borderRadius: BorderRadius.circular(10),
//                   boxShadow: [
//                     BoxShadow(
//                       color: Colors.green.shade900.withOpacity(0.6),
//                       blurRadius: 8,
//                       offset: const Offset(0, 3),
//                     ),
//                   ],
//                 ),
//                 child: RichText(
//                   text: TextSpan(
//                     children: [
//                       const TextSpan(
//                         text: "E-Bike for Sale ",
//                         style: TextStyle(
//                           fontSize: 22,
//                           fontWeight: FontWeight.bold,
//                           color: Colors.white,
//                         ),
//                       ),
//                       TextSpan(
//                         text: "(Showing 5)",
//                         style: TextStyle(
//                           fontSize: 22,
//                           fontWeight: FontWeight.w600,
//                           color: Colors.red.shade300,
//                         ),
//                       ),
//                     ],
//                   ),
//                 ),
//               ),
//               const SizedBox(height: 16),

//               FutureBuilder<List<dynamic>>(
//                 future: allBikeData,
//                 builder: (context, snapshot) {
//                   if (snapshot.connectionState == ConnectionState.waiting) {
//                     return const Center(child: CircularProgressIndicator());
//                   }

//                   if (snapshot.hasError) {
//                     return Center(child: Text("Error: ${snapshot.error}"));
//                   }

//                   if (!snapshot.hasData || snapshot.data!.isEmpty) {
//                     return const Center(child: Text("No data found"));
//                   }

//                   final data = snapshot.data!;

//                   return GridView.builder(
//                     physics:
//                         const NeverScrollableScrollPhysics(), // Disable GridView scrolling
//                     shrinkWrap:
//                         true, // Let GridView take only the space it needs
//                     padding: const EdgeInsets.all(10),
//                     itemCount: 4,
//                     gridDelegate:
//                         const SliverGridDelegateWithFixedCrossAxisCount(
//                           crossAxisCount: 2,
//                           crossAxisSpacing: 18,
//                           mainAxisSpacing: 18,
//                           mainAxisExtent: 420,
//                         ),
//                     itemBuilder: (context, index) {
//                       final item = data[index];
//                       return Container(
//                         decoration: BoxDecoration(
//                           color: Colors.white,
//                           borderRadius: BorderRadius.circular(16),
//                           boxShadow: [
//                             BoxShadow(
//                               color: Colors.grey.shade400.withOpacity(0.3),
//                               offset: const Offset(0, 4),
//                               blurRadius: 8,
//                             ),
//                           ],
//                         ),
//                         padding: const EdgeInsets.all(14),
//                         child: Column(
//                           crossAxisAlignment: CrossAxisAlignment.start,
//                           children: [
//                             // Image with rounded corners
//                             ClipRRect(
//                               borderRadius: BorderRadius.circular(12),
//                               child: FadeInImage.assetNetwork(
//                                 placeholder:
//                                     'assets/loading.gif', // Update this path or replace with SizedBox()
//                                 // image:
//                                 //     "https://cbvalueaddrealty.in/wp-content/uploads/2022/07/electric-vehicle.jpg",
//                                 image: item['img1'] ?? '',
//                                 width: double.infinity,
//                                 height: 150,
//                                 fit: BoxFit.cover,
//                               ),
//                             ),
//                             const SizedBox(height: 12),

//                             // Title + Icon row
//                             Row(
//                               mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                               children: [
//                                 Text(
//                                   item['vehicle_name'] ?? '',
//                                   style: TextStyle(
//                                     fontWeight: FontWeight.bold,
//                                     fontSize: 18,
//                                   ),
//                                 ),
//                                 Icon(
//                                   Icons.bike_scooter,
//                                   color: Colors.green.shade700,
//                                   size: 24,
//                                 ),
//                               ],
//                             ),
//                             const SizedBox(height: 8),

//                             // Price row
//                             RichText(
//                               text: TextSpan(
//                                 children: [
//                                   TextSpan(
//                                     text: "Price: ",
//                                     style: TextStyle(
//                                       color: Colors.black87,
//                                       fontSize: 16,
//                                     ),
//                                   ),
//                                   WidgetSpan(
//                                     child: Icon(
//                                       Icons.currency_rupee_rounded,
//                                       size: 18,
//                                       color: Colors.black87,
//                                     ),
//                                   ),
//                                   TextSpan(
//                                     text: item['showroom_price'] ?? '',
//                                     style: TextStyle(
//                                       color: Colors.black87,
//                                       fontSize: 16,
//                                     ),
//                                   ),
//                                 ],
//                               ),
//                             ),
//                             const SizedBox(height: 12),

//                             // Specs
//                             Padding(
//                               padding: const EdgeInsets.symmetric(
//                                 horizontal: 6,
//                               ),
//                               child: Column(
//                                 children: [
//                                   Row(
//                                     mainAxisAlignment:
//                                         MainAxisAlignment.spaceBetween,
//                                     children: [
//                                       Text(
//                                         "Motor\nPower",
//                                         textAlign: TextAlign.center,
//                                         style: TextStyle(
//                                           fontWeight: FontWeight.w600,
//                                         ),
//                                       ),
//                                       Text(
//                                         "Range",
//                                         textAlign: TextAlign.center,
//                                         style: TextStyle(
//                                           fontWeight: FontWeight.w600,
//                                         ),
//                                       ),
//                                       Text(
//                                         "Battery",
//                                         textAlign: TextAlign.center,
//                                         style: TextStyle(
//                                           fontWeight: FontWeight.w600,
//                                         ),
//                                       ),
//                                     ],
//                                   ),
//                                   SizedBox(height: 4),
//                                   Row(
//                                     mainAxisAlignment:
//                                         MainAxisAlignment.spaceBetween,
//                                     children: [
//                                       Text(
//                                         item['motor_power'] ?? '',
//                                         textAlign: TextAlign.center,
//                                       ),
//                                       Text(
//                                         item['range'] ?? '',
//                                         textAlign: TextAlign.center,
//                                       ),
//                                       Text(
//                                         item['battery'] ?? '',
//                                         textAlign: TextAlign.center,
//                                       ),
//                                     ],
//                                   ),
//                                 ],
//                               ),
//                             ),
//                             const Spacer(),

//                             // Checkbox above button
//                             Column(
//                               crossAxisAlignment: CrossAxisAlignment.start,
//                               children: [
//                                 Row(
//                                   children: [
//                                     Checkbox(
//                                       value: isChecked,
//                                       onChanged: (bool? value) {
//                                         setState(() {
//                                           isChecked = value ?? false;
//                                         });
//                                       },
//                                       activeColor: Colors.green.shade700,
//                                     ),
//                                     const Text("Check it"),
//                                   ],
//                                 ),
//                                 SizedBox(
//                                   width: double.infinity,
//                                   child: ElevatedButton(
//                                     style: ElevatedButton.styleFrom(
//                                       backgroundColor: Colors.green.shade700,
//                                       shape: RoundedRectangleBorder(
//                                         borderRadius: BorderRadius.circular(8),
//                                       ),
//                                       padding: const EdgeInsets.symmetric(
//                                         vertical: 12,
//                                       ),
//                                     ),
//                                     onPressed: () {
//                                       Navigator.push(
//                                         context,
//                                         MaterialPageRoute(
//                                           builder: (_) => BikeDetails(),
//                                         ),
//                                       );
//                                     },
//                                     child: const Text(
//                                       "Get Details",
//                                       style: TextStyle(
//                                         color: Colors.white,
//                                         fontSize: 16,
//                                       ),
//                                     ),
//                                   ),
//                                 ),
//                               ],
//                             ),
//                           ],
//                         ),
//                       );
//                     },
//                   );
//                 },
//               ),

//               // GridView as a shrink-wrapped widget, no scrolling of its own
//               // GridView.builder(
//               //   physics:
//               //       const NeverScrollableScrollPhysics(), // Disable GridView scrolling
//               //   shrinkWrap: true, // Let GridView take only the space it needs
//               //   padding: const EdgeInsets.all(10),
//               //   itemCount: 4,
//               //   gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
//               //     crossAxisCount: 2,
//               //     crossAxisSpacing: 18,
//               //     mainAxisSpacing: 18,
//               //     mainAxisExtent: 420,
//               //   ),
//               //   itemBuilder: (context, index) {

//               //     return _buildBikeCard();
//               //   },
//               // ),
//               const SizedBox(height: 20),
//               Text("write something"),
//             ],
//           ),
//         ),
//       ),
//     );
//   }

//   Widget _buildBikeCard() {
//     return Container(
//       decoration: BoxDecoration(
//         color: Colors.white,
//         borderRadius: BorderRadius.circular(16),
//         boxShadow: [
//           BoxShadow(
//             color: Colors.grey.shade400.withOpacity(0.3),
//             offset: const Offset(0, 4),
//             blurRadius: 8,
//           ),
//         ],
//       ),
//       padding: const EdgeInsets.all(14),
//       child: Column(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//           // Image with rounded corners
//           ClipRRect(
//             borderRadius: BorderRadius.circular(12),
//             child: FadeInImage.assetNetwork(
//               placeholder:
//                   'assets/loading.gif', // Update this path or replace with SizedBox()
//               image:
//                   "https://cbvalueaddrealty.in/wp-content/uploads/2022/07/electric-vehicle.jpg",
//               width: double.infinity,
//               height: 150,
//               fit: BoxFit.cover,
//             ),
//           ),
//           const SizedBox(height: 12),

//           // Title + Icon row
//           Row(
//             mainAxisAlignment: MainAxisAlignment.spaceBetween,
//             children: [
//               const Text(
//                 "Hero Honda",
//                 style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
//               ),
//               Icon(Icons.bike_scooter, color: Colors.green.shade700, size: 24),
//             ],
//           ),
//           const SizedBox(height: 8),

//           // Price row
//           RichText(
//             text: TextSpan(
//               children: [
//                 const TextSpan(
//                   text: "Price: ",
//                   style: TextStyle(color: Colors.black87, fontSize: 16),
//                 ),
//                 WidgetSpan(
//                   child: Icon(
//                     Icons.currency_rupee_rounded,
//                     size: 18,
//                     color: Colors.black87,
//                   ),
//                 ),
//                 const TextSpan(
//                   text: " 12,00,000",
//                   style: TextStyle(color: Colors.black87, fontSize: 16),
//                 ),
//               ],
//             ),
//           ),
//           const SizedBox(height: 12),

//           // Specs
//           Padding(
//             padding: const EdgeInsets.symmetric(horizontal: 6),
//             child: Column(
//               children: const [
//                 Row(
//                   mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                   children: [
//                     Text(
//                       "Motor\nPower",
//                       textAlign: TextAlign.center,
//                       style: TextStyle(fontWeight: FontWeight.w600),
//                     ),
//                     Text(
//                       "Range",
//                       textAlign: TextAlign.center,
//                       style: TextStyle(fontWeight: FontWeight.w600),
//                     ),
//                     Text(
//                       "Battery",
//                       textAlign: TextAlign.center,
//                       style: TextStyle(fontWeight: FontWeight.w600),
//                     ),
//                   ],
//                 ),
//                 SizedBox(height: 4),
//                 Row(
//                   mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                   children: [
//                     Text("120Hz", textAlign: TextAlign.center),
//                     Text("70km", textAlign: TextAlign.center),
//                     Text("200v", textAlign: TextAlign.center),
//                   ],
//                 ),
//               ],
//             ),
//           ),
//           const Spacer(),

//           // Checkbox above button
//           Column(
//             crossAxisAlignment: CrossAxisAlignment.start,
//             children: [
//               Row(
//                 children: [
//                   Checkbox(
//                     value: isChecked,
//                     onChanged: (bool? value) {
//                       setState(() {
//                         isChecked = value ?? false;
//                       });
//                     },
//                     activeColor: Colors.green.shade700,
//                   ),
//                   const Text("Check it"),
//                 ],
//               ),
//               SizedBox(
//                 width: double.infinity,
//                 child: ElevatedButton(
//                   style: ElevatedButton.styleFrom(
//                     backgroundColor: Colors.green.shade700,
//                     shape: RoundedRectangleBorder(
//                       borderRadius: BorderRadius.circular(8),
//                     ),
//                     padding: const EdgeInsets.symmetric(vertical: 12),
//                   ),
//                   onPressed: () {
//                     Navigator.push(
//                       context,
//                       MaterialPageRoute(builder: (_) => BikeDetails()),
//                     );
//                   },
//                   child: const Text(
//                     "Get Details",
//                     style: TextStyle(color: Colors.white, fontSize: 16),
//                   ),
//                 ),
//               ),
//             ],
//           ),
//         ],
//       ),
//     );
//   }
// }


import 'package:ev_market/services/api_service.dart';
import 'package:ev_market/user/pages/two-wheeler/bike_details.dart';
import 'package:flutter/material.dart';

class Bike extends StatefulWidget {
  const Bike({super.key});

  @override
  State<Bike> createState() => _BikeState();
}

class _BikeState extends State<Bike> {
  bool isChecked = false;
  late Future<List<dynamic>> allBikeData;

  @override
  void initState() {
    super.initState();
    allBikeData = ApiService.fetchBikeData();
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
              return const Center(child: Text("No data found"));
            }

            final data = snapshot.data!;

            return CustomScrollView(
              slivers: [
                // App Bar / Header
                SliverAppBar(
                  backgroundColor: Colors.green.shade700,
                  pinned: true,
                  expandedHeight: 80,
                  flexibleSpace: FlexibleSpaceBar(
                    titlePadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    title: Row(
                      children: [
                        const Text(
                          "E-Bike for Sale ",
                          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                        ),
                        Text(
                          "(Showing ${data.length})",
                          style: TextStyle(fontSize: 16, color: Colors.red.shade300),
                        ),
                      ],
                    ),
                  ),
                ),

                // Grid
                SliverPadding(
                  padding: const EdgeInsets.all(12),
                  sliver: SliverGrid(
                    delegate: SliverChildBuilderDelegate(
                      (context, index) {
                        final item = data[index];
                        return Container(
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(16),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black26,
                                blurRadius: 6,
                                offset: const Offset(0, 3),
                              ),
                            ],
                          ),
                          padding: const EdgeInsets.all(12),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              // Image
                              ClipRRect(
                                borderRadius: BorderRadius.circular(12),
                                child: Image.network(
                                  item['img1'] ?? '',
                                  height: 150,
                                  width: double.infinity,
                                  fit: BoxFit.cover,
                                  errorBuilder: (context, error, stackTrace) {
                                    return Container(
                                      height: 150,
                                      color: Colors.grey[300],
                                      child: const Icon(Icons.broken_image, size: 50, color: Colors.grey),
                                    );
                                  },
                                ),
                              ),
                              const SizedBox(height: 10),

                              // Title
                              Text(
                                item['vehicle_name'] ?? '',
                                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                              ),
                              const SizedBox(height: 4),

                              // Price
                              Row(
                                children: [
                                  const Icon(Icons.currency_rupee, size: 16),
                                  Text(item['showroom_price'] ?? ''),
                                ],
                              ),
                              const SizedBox(height: 8),

                              // Specs
                              Row(
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                children: [
                                  Column(
                                    children: [
                                      const Text("Motor", style: TextStyle(fontWeight: FontWeight.w600)),
                                      Text(item['motor_power'] ?? ''),
                                    ],
                                  ),
                                  Column(
                                    children: [
                                      const Text("Range", style: TextStyle(fontWeight: FontWeight.w600)),
                                      Text(item['range'] ?? ''),
                                    ],
                                  ),
                                  Column(
                                    children: [
                                      const Text("Battery", style: TextStyle(fontWeight: FontWeight.w600)),
                                      Text(item['battery'] ?? ''),
                                    ],
                                  ),
                                ],
                              ),
                              const Spacer(),

                              // Button
                              ElevatedButton(
                                style: ElevatedButton.styleFrom(
                                  backgroundColor: Colors.green.shade700,
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(8),
                                  ),
                                ),
                                onPressed: () {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(builder: (_) => BikeDetails()),
                                  );
                                },
                                child: const Text("Get Details", style: TextStyle(color: Colors.white)),
                              ),
                            ],
                          ),
                        );
                      },
                      childCount: data.length,
                    ),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 2,
                      mainAxisSpacing: 12,
                      crossAxisSpacing: 12,
                      mainAxisExtent: 350,
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
