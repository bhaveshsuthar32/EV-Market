// import 'package:flutter/material.dart';
// import 'package:carousel_slider/carousel_slider.dart';
// import 'package:animate_do/animate_do.dart';

// class BikeDetails extends StatefulWidget {
//   const BikeDetails({super.key});

//   @override
//   State<BikeDetails> createState() => _BikeDetailsState();
// }

// class _BikeDetailsState extends State<BikeDetails>
//     with TickerProviderStateMixin {
//   late AnimationController _controller;
//   late Animation<double> _fadeAnimation;
//   int _currentImageIndex = 0;
//   final CarouselController _carouselController = CarouselController();

//   // Dummy data
//   final List<String> vehicleImages = [
//     'https://images.pexels.com/photos/16728462/pexels-photo-16728462.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/16728461/pexels-photo-16728461.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/9694397/pexels-photo-9694397.jpeg?auto=compress&cs=tinysrgb&w=800',
//   ];

//   final Map<String, String> vehicleSpecs = {
//     'Motor Power': '3000W',
//     'Range': '120 km',
//     'Battery': '72V 40Ah Lithium',
//     'Charging Time': '4-6 hours',
//     'Top Speed': '65 kmph',
//     'Weight': '95 kg',
//     'Brakes': 'Disc (F&R)',
//     'Suspension': 'Hydraulic',
//   };

//   @override
//   void initState() {
//     super.initState();
//     _controller = AnimationController(
//       duration: const Duration(milliseconds: 800),
//       vsync: this,
//     );
//     _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
//       CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
//     );
//     _controller.forward();
//   }

//   @override
//   void dispose() {
//     _controller.dispose();
//     super.dispose();
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       backgroundColor: Colors.grey[50],
//       body: CustomScrollView(
//         physics: const BouncingScrollPhysics(),
//         slivers: [
//           _buildSliverAppBar(),
//           SliverToBoxAdapter(
//             child: Column(
//               crossAxisAlignment: CrossAxisAlignment.start,
//               children: [
//                 _buildImageCarousel(),
//                 _buildVehicleInfo(),
//                 _buildSpecsSection(),
//                 _buildDescriptionSection(),
//                 const SizedBox(height: 100), // Space for floating button
//               ],
//             ),
//           ),
//         ],
//       ),
//       floatingActionButton: _buildFloatingActionButton(),
//     );
//   }

//   Widget _buildSliverAppBar() {
//     return SliverAppBar(
//       expandedHeight: 0,
//       pinned: true,
//       backgroundColor: Colors.transparent,
//       elevation: 0,
//       leading: FadeInLeft(
//         duration: const Duration(milliseconds: 600),
//         child: Container(
//           margin: const EdgeInsets.all(8),
//           decoration: BoxDecoration(
//             color: Colors.white,
//             borderRadius: BorderRadius.circular(12),
//             boxShadow: [
//               BoxShadow(
//                 color: Colors.black.withOpacity(0.1),
//                 blurRadius: 10,
//                 offset: const Offset(0, 2),
//               ),
//             ],
//           ),
//           child: IconButton(
//             icon: const Icon(Icons.arrow_back_ios_new, color: Colors.black87),
//             onPressed: () => Navigator.pop(context),
//           ),
//         ),
//       ),
//       actions: [
//         FadeInRight(
//           duration: const Duration(milliseconds: 600),
//           child: Container(
//             margin: const EdgeInsets.all(8),
//             decoration: BoxDecoration(
//               color: Colors.white,
//               borderRadius: BorderRadius.circular(12),
//               boxShadow: [
//                 BoxShadow(
//                   color: Colors.black.withOpacity(0.1),
//                   blurRadius: 10,
//                   offset: const Offset(0, 2),
//                 ),
//               ],
//             ),
//             child: IconButton(
//               icon: const Icon(Icons.favorite_border, color: Colors.black87),
//               onPressed: () {},
//             ),
//           ),
//         ),
//       ],
//     );
//   }

//   Widget _buildImageCarousel() {
//     return FadeInUp(
//       duration: const Duration(milliseconds: 800),
//       child: Container(
//         height: 300,
//         margin: const EdgeInsets.symmetric(vertical: 16),
//         child: Stack(
//           children: [
//             CarouselSlider(
//               carouselController: _carouselController,
//               options: CarouselOptions(
//                 height: 300,
//                 viewportFraction: 0.85,
//                 enlargeCenterPage: true,
//                 enableInfiniteScroll: true,
//                 autoPlay: true,
//                 autoPlayInterval: const Duration(seconds: 4),
//                 onPageChanged: (index, reason) {
//                   setState(() {
//                     _currentImageIndex = index;
//                   });
//                 },
//               ),
//               items: vehicleImages.map((imageUrl) {
//                 return Builder(
//                   builder: (BuildContext context) {
//                     return Container(
//                       width: MediaQuery.of(context).size.width,
//                       margin: const EdgeInsets.symmetric(horizontal: 5.0),
//                       decoration: BoxDecoration(
//                         borderRadius: BorderRadius.circular(20),
//                         boxShadow: [
//                           BoxShadow(
//                             color: Colors.black.withOpacity(0.2),
//                             blurRadius: 15,
//                             offset: const Offset(0, 5),
//                           ),
//                         ],
//                       ),
//                       child: ClipRRect(
//                         borderRadius: BorderRadius.circular(20),
//                         child: Image.network(
//                           imageUrl,
//                           fit: BoxFit.cover,
//                           loadingBuilder: (context, child, loadingProgress) {
//                             if (loadingProgress == null) return child;
//                             return Container(
//                               color: Colors.grey[300],
//                               child: const Center(
//                                 child: CircularProgressIndicator(),
//                               ),
//                             );
//                           },
//                         ),
//                       ),
//                     );
//                   },
//                 );
//               }).toList(),
//             ),
//             Positioned(
//               bottom: 16,
//               left: 0,
//               right: 0,
//               child: Row(
//                 mainAxisAlignment: MainAxisAlignment.center,
//                 children: vehicleImages.asMap().entries.map((entry) {
//                   return AnimatedContainer(
//                     duration: const Duration(milliseconds: 300),
//                     width: _currentImageIndex == entry.key ? 24 : 8,
//                     height: 8,
//                     margin: const EdgeInsets.symmetric(horizontal: 4),
//                     decoration: BoxDecoration(
//                       borderRadius: BorderRadius.circular(4),
//                       color: _currentImageIndex == entry.key
//                           ? Colors.white
//                           : Colors.white.withOpacity(0.5),
//                     ),
//                   );
//                 }).toList(),
//               ),
//             ),
//           ],
//         ),
//       ),
//     );
//   }

//   Widget _buildVehicleInfo() {
//     return FadeInUp(
//       duration: const Duration(milliseconds: 1000),
//       delay: const Duration(milliseconds: 200),
//       child: Container(
//         margin: const EdgeInsets.all(20),
//         padding: const EdgeInsets.all(24),
//         decoration: BoxDecoration(
//           color: Colors.white,
//           borderRadius: BorderRadius.circular(20),
//           boxShadow: [
//             BoxShadow(
//               color: Colors.black.withOpacity(0.08),
//               blurRadius: 20,
//               offset: const Offset(0, 4),
//             ),
//           ],
//         ),
//         child: Column(
//           crossAxisAlignment: CrossAxisAlignment.start,
//           children: [
//             Row(
//               mainAxisAlignment: MainAxisAlignment.spaceBetween,
//               crossAxisAlignment: CrossAxisAlignment.start,
//               children: [
//                 Expanded(
//                   child: Column(
//                     crossAxisAlignment: CrossAxisAlignment.start,
//                     children: [
//                       Text(
//                         'Thunder Electric S1',
//                         style: TextStyle(
//                           fontSize: 28,
//                           fontWeight: FontWeight.bold,
//                           color: Colors.grey[800],
//                         ),
//                       ),
//                       const SizedBox(height: 8),
//                       Text(
//                         'Premium Electric Scooter',
//                         style: TextStyle(
//                           fontSize: 16,
//                           color: Colors.grey[600],
//                           fontWeight: FontWeight.w500,
//                         ),
//                       ),
//                     ],
//                   ),
//                 ),
//                 Container(
//                   padding: const EdgeInsets.symmetric(
//                     horizontal: 16,
//                     vertical: 8,
//                   ),
//                   decoration: BoxDecoration(
//                     color: const Color(0xFF1E88E5).withOpacity(0.1),
//                     borderRadius: BorderRadius.circular(12),
//                   ),
//                   child: Text(
//                     '₹1,29,999',
//                     style: TextStyle(
//                       fontSize: 24,
//                       fontWeight: FontWeight.bold,
//                       color: const Color(0xFF1E88E5),
//                     ),
//                   ),
//                 ),
//               ],
//             ),
//             const SizedBox(height: 20),
//             Row(
//               children: [
//                 _buildHighlight('120km', 'Range'),
//                 const SizedBox(width: 20),
//                 _buildHighlight('65kmph', 'Top Speed'),
//                 const SizedBox(width: 20),
//                 _buildHighlight('4-6hrs', 'Charging'),
//               ],
//             ),
//           ],
//         ),
//       ),
//     );
//   }

//   Widget _buildHighlight(String value, String label) {
//     return Expanded(
//       child: Container(
//         padding: const EdgeInsets.all(12),
//         decoration: BoxDecoration(
//           color: Colors.grey[50],
//           borderRadius: BorderRadius.circular(12),
//           border: Border.all(color: Colors.grey[200]!),
//         ),
//         child: Column(
//           children: [
//             Text(
//               value,
//               style: const TextStyle(
//                 fontSize: 18,
//                 fontWeight: FontWeight.bold,
//                 color: Color(0xFF1E88E5),
//               ),
//             ),
//             const SizedBox(height: 4),
//             Text(
//               label,
//               style: TextStyle(
//                 fontSize: 12,
//                 color: Colors.grey[600],
//                 fontWeight: FontWeight.w500,
//               ),
//             ),
//           ],
//         ),
//       ),
//     );
//   }

//   Widget _buildSpecsSection() {
//     return FadeInUp(
//       duration: const Duration(milliseconds: 1200),
//       delay: const Duration(milliseconds: 400),
//       child: Container(
//         margin: const EdgeInsets.symmetric(horizontal: 20),
//         padding: const EdgeInsets.all(24),
//         decoration: BoxDecoration(
//           color: Colors.white,
//           borderRadius: BorderRadius.circular(20),
//           boxShadow: [
//             BoxShadow(
//               color: Colors.black.withOpacity(0.08),
//               blurRadius: 20,
//               offset: const Offset(0, 4),
//             ),
//           ],
//         ),
//         child: Column(
//           crossAxisAlignment: CrossAxisAlignment.start,
//           children: [
//             Text(
//               'Technical Specifications',
//               style: TextStyle(
//                 fontSize: 22,
//                 fontWeight: FontWeight.bold,
//                 color: Colors.grey[800],
//               ),
//             ),
//             const SizedBox(height: 20),
//             GridView.builder(
//               shrinkWrap: true,
//               physics: const NeverScrollableScrollPhysics(),
//               gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
//                 crossAxisCount: 2,
//                 childAspectRatio: 2.5,
//                 crossAxisSpacing: 16,
//                 mainAxisSpacing: 16,
//               ),
//               itemCount: vehicleSpecs.length,
//               itemBuilder: (context, index) {
//                 final key = vehicleSpecs.keys.elementAt(index);
//                 final value = vehicleSpecs[key]!;
//                 return Container(
//                   padding: const EdgeInsets.all(16),
//                   decoration: BoxDecoration(
//                     color: Colors.grey[50],
//                     borderRadius: BorderRadius.circular(12),
//                     border: Border.all(color: Colors.grey[200]!),
//                   ),
//                   child: Column(
//                     crossAxisAlignment: CrossAxisAlignment.start,
//                     mainAxisAlignment: MainAxisAlignment.center,
//                     children: [
//                       Text(
//                         key,
//                         style: TextStyle(
//                           fontSize: 12,
//                           color: Colors.grey[600],
//                           fontWeight: FontWeight.w500,
//                         ),
//                       ),
//                       const SizedBox(height: 4),
//                       Text(
//                         value,
//                         style: const TextStyle(
//                           fontSize: 16,
//                           fontWeight: FontWeight.bold,
//                           color: Colors.black87,
//                         ),
//                       ),
//                     ],
//                   ),
//                 );
//               },
//             ),
//           ],
//         ),
//       ),
//     );
//   }

//   Widget _buildDescriptionSection() {
//     return FadeInUp(
//       duration: const Duration(milliseconds: 1400),
//       delay: const Duration(milliseconds: 600),
//       child: Container(
//         margin: const EdgeInsets.all(20),
//         padding: const EdgeInsets.all(24),
//         decoration: BoxDecoration(
//           color: Colors.white,
//           borderRadius: BorderRadius.circular(20),
//           boxShadow: [
//             BoxShadow(
//               color: Colors.black.withOpacity(0.08),
//               blurRadius: 20,
//               offset: const Offset(0, 4),
//             ),
//           ],
//         ),
//         child: Column(
//           crossAxisAlignment: CrossAxisAlignment.start,
//           children: [
//             Text(
//               'About This Vehicle',
//               style: TextStyle(
//                 fontSize: 22,
//                 fontWeight: FontWeight.bold,
//                 color: Colors.grey[800],
//               ),
//             ),
//             const SizedBox(height: 16),
//             Text(
//               'The Thunder Electric S1 represents the pinnacle of electric mobility technology. With its powerful 3000W motor and advanced lithium battery system, this premium electric scooter delivers exceptional performance while maintaining environmental sustainability.\n\nFeaturing cutting-edge design elements, premium build quality, and smart connectivity features, the S1 is perfect for urban commuters who demand both style and substance. The vehicle comes with a comprehensive warranty and nationwide service support.',
//               style: TextStyle(
//                 fontSize: 16,
//                 height: 1.6,
//                 color: Colors.grey[700],
//               ),
//             ),
//             const SizedBox(height: 20),
//             Container(
//               padding: const EdgeInsets.all(16),
//               decoration: BoxDecoration(
//                 color: const Color(0xFF1E88E5).withOpacity(0.1),
//                 borderRadius: BorderRadius.circular(12),
//               ),
//               child: Row(
//                 children: [
//                   Icon(
//                     Icons.eco,
//                     color: const Color(0xFF1E88E5),
//                   ),
//                   const SizedBox(width: 12),
//                   Expanded(
//                     child: Text(
//                       'Zero emissions, maximum performance. Join the electric revolution!',
//                       style: TextStyle(
//                         color: const Color(0xFF1E88E5),
//                         fontWeight: FontWeight.w600,
//                       ),
//                     ),
//                   ),
//                 ],
//               ),
//             ),
//           ],
//         ),
//       ),
//     );
//   }

//   Widget _buildFloatingActionButton() {
//     return FadeInUp(
//       duration: const Duration(milliseconds: 1600),
//       delay: const Duration(milliseconds: 800),
//       child: Container(
//         width: double.infinity,
//         margin: const EdgeInsets.symmetric(horizontal: 20),
//         child: FloatingActionButton.extended(
//           onPressed: () {
//             ScaffoldMessenger.of(context).showSnackBar(
//               SnackBar(
//                 content: const Text('Booking feature coming soon!'),
//                 backgroundColor: const Color(0xFF1E88E5),
//                 behavior: SnackBarBehavior.floating,
//                 shape: RoundedRectangleBorder(
//                   borderRadius: BorderRadius.circular(12),
//                 ),
//               ),
//             );
//           },
//           backgroundColor: const Color(0xFF1E88E5),
//           elevation: 8,
//           shape: RoundedRectangleBorder(
//             borderRadius: BorderRadius.circular(16),
//           ),
//           label: Row(
//             mainAxisSize: MainAxisSize.min,
//             children: [
//               const Icon(Icons.calendar_today, color: Colors.white),
//               const SizedBox(width: 8),
//               const Text(
//                 'Book Test Drive',
//                 style: TextStyle(
//                   color: Colors.white,
//                   fontSize: 18,
//                   fontWeight: FontWeight.bold,
//                 ),
//               ),
//             ],
//           ),
//         ),
//       ),
//     );
//   }
// }




import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:animate_do/animate_do.dart';

class BikeDetails extends StatefulWidget {
  const BikeDetails({super.key});

  @override
  State<BikeDetails> createState() => _BikeDetailsState();
}

class _BikeDetailsState extends State<BikeDetails>
    with TickerProviderStateMixin {
  int _currentImageIndex = 0;
  // final CarouselController _carouselController = CarouselController();

  // Dummy images
  final List<String> vehicleImages = [
    'https://images.pexels.com/photos/16728462/pexels-photo-16728462.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/16728461/pexels-photo-16728461.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/9694397/pexels-photo-9694397.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  // Dummy specs
  final Map<String, String> vehicleSpecs = {
    'Motor Power': '3000W',
    'Range': '120 km',
    'Battery': '72V 40Ah Lithium',
    'Charging Time': '4-6 hours',
    'Top Speed': '65 kmph',
    'Weight': '95 kg',
    'Brakes': 'Disc (F&R)',
    'Suspension': 'Hydraulic',
  };

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[50],
      body: CustomScrollView(
        physics: const BouncingScrollPhysics(),
        slivers: [
          _buildSliverAppBar(),
          SliverToBoxAdapter(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _buildImageCarousel(),
                _buildVehicleInfo(),
                _buildSpecsSection(),
                _buildDescriptionSection(),
                const SizedBox(height: 100), // space for floating button
              ],
            ),
          ),
        ],
      ),
      floatingActionButton: _buildFloatingActionButton(),
    );
  }

  // ✅ AppBar
  Widget _buildSliverAppBar() {
    return SliverAppBar(
      expandedHeight: 0,
      pinned: true,
      backgroundColor: Colors.transparent,
      elevation: 0,
      leading: FadeInLeft(
        duration: const Duration(milliseconds: 600),
        child: Container(
          margin: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(12),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.1),
                blurRadius: 10,
                offset: const Offset(0, 2),
              ),
            ],
          ),
          child: IconButton(
            icon: const Icon(Icons.arrow_back_ios_new, color: Colors.black87),
            onPressed: () => Navigator.pop(context),
          ),
        ),
      ),
      actions: [
        FadeInRight(
          duration: const Duration(milliseconds: 600),
          child: Container(
            margin: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.1),
                  blurRadius: 10,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: IconButton(
              icon: const Icon(Icons.favorite_border, color: Colors.black87),
              onPressed: () {},
            ),
          ),
        ),
      ],
    );
  }

  // ✅ Carousel with indicator
  Widget _buildImageCarousel() {
    return FadeInUp(
      duration: const Duration(milliseconds: 800),
      child: Container(
        height: 300,
        margin: const EdgeInsets.symmetric(vertical: 16),
        child: Stack(
          children: [
            CarouselSlider(
              // controller: _carouselController, // ✅ correct property (v5)
              options: CarouselOptions(
                height: 300,
                viewportFraction: 0.85,
                enlargeCenterPage: true,
                enableInfiniteScroll: true,
                autoPlay: true,
                autoPlayInterval: const Duration(seconds: 4),
                onPageChanged: (index, reason) {
                  setState(() {
                    _currentImageIndex = index;
                  });
                },
              ),
              items: vehicleImages.map((imageUrl) {
                return Builder(
                  builder: (BuildContext context) {
                    return Container(
                      width: MediaQuery.of(context).size.width,
                      margin: const EdgeInsets.symmetric(horizontal: 5.0),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.2),
                            blurRadius: 15,
                            offset: const Offset(0, 5),
                          ),
                        ],
                      ),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(20),
                        child: Image.network(
                          imageUrl,
                          fit: BoxFit.cover,
                          loadingBuilder: (context, child, loadingProgress) {
                            if (loadingProgress == null) return child;
                            return Container(
                              color: Colors.grey[300],
                              child: const Center(
                                child: CircularProgressIndicator(),
                              ),
                            );
                          },
                        ),
                      ),
                    );
                  },
                );
              }).toList(),
            ),
            Positioned(
              bottom: 16,
              left: 0,
              right: 0,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: vehicleImages.asMap().entries.map((entry) {
                  return AnimatedContainer(
                    duration: const Duration(milliseconds: 300),
                    width: _currentImageIndex == entry.key ? 24 : 8,
                    height: 8,
                    margin: const EdgeInsets.symmetric(horizontal: 4),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4),
                      color: _currentImageIndex == entry.key
                          ? Colors.white
                          : Colors.white.withOpacity(0.5),
                    ),
                  );
                }).toList(),
              ),
            ),
          ],
        ),
      ),
    );
  }

  // ✅ Vehicle Info Section
  Widget _buildVehicleInfo() {
    return FadeInUp(
      duration: const Duration(milliseconds: 1000),
      delay: const Duration(milliseconds: 200),
      child: Container(
        margin: const EdgeInsets.all(20),
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.08),
              blurRadius: 20,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Thunder Electric S1',
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                        color: Colors.grey[800],
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Premium Electric Scooter',
                      style: TextStyle(
                        fontSize: 16,
                        color: Colors.grey[600],
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ],
                ),
                Container(
                  padding: const EdgeInsets.symmetric(
                      horizontal: 16, vertical: 8),
                  decoration: BoxDecoration(
                    color: const Color(0xFF1E88E5).withOpacity(0.1),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Text(
                    '₹1,29,999',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFF1E88E5),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),
            Row(
              children: [
                _buildHighlight('120km', 'Range'),
                const SizedBox(width: 20),
                _buildHighlight('65kmph', 'Top Speed'),
                const SizedBox(width: 20),
                _buildHighlight('4-6hrs', 'Charging'),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHighlight(String value, String label) {
    return Expanded(
      child: Container(
        // height: 80,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: Colors.grey[50],
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: Colors.grey[200]!),
        ),
        child: Column(
          
          children: [
            Text(
              value,
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Color(0xFF1E88E5),
              ),
            ),
            const SizedBox(height: 4),
            Text(
              label,
              style: TextStyle(
                fontSize: 12,
                color: Colors.grey[600],
              ),
            ),
          ],
        ),
      ),
    );
  }

  // ✅ Specs Section
  Widget _buildSpecsSection() {
    return FadeInUp(
      duration: const Duration(milliseconds: 1200),
      delay: const Duration(milliseconds: 400),
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 20),
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.08),
              blurRadius: 20,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Technical Specifications',
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.grey[800],
              ),
            ),
            const SizedBox(height: 0),
            GridView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: 1.5,
                crossAxisSpacing: 26,
                mainAxisSpacing: 26,
                
              ),
              itemCount: vehicleSpecs.length,
              itemBuilder: (context, index) {
                final key = vehicleSpecs.keys.elementAt(index);
                final value = vehicleSpecs[key]!;
                return Container(
                 
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.grey[50],
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: Colors.grey[200]!),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(key,
                          style: TextStyle(
                              fontSize: 12, color: Colors.grey[600])),
                      const SizedBox(height: 4),
                      Text(value,
                          style: const TextStyle(
                              fontSize: 16, fontWeight: FontWeight.bold)),
                    ],
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }

  // ✅ Description Section
  Widget _buildDescriptionSection() {
    return FadeInUp(
      duration: const Duration(milliseconds: 1400),
      delay: const Duration(milliseconds: 600),
      child: Container(
        margin: const EdgeInsets.all(20),
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.08),
              blurRadius: 20,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'About This Vehicle',
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.grey[800],
              ),
            ),
            const SizedBox(height: 16),
            Text(
              'The Thunder Electric S1 represents the pinnacle of electric mobility technology. With its powerful 3000W motor and advanced lithium battery system, this premium electric scooter delivers exceptional performance while maintaining environmental sustainability.\n\nFeaturing cutting-edge design elements, premium build quality, and smart connectivity features, the S1 is perfect for urban commuters who demand both style and substance.',
              style: TextStyle(
                fontSize: 16,
                height: 1.6,
                color: Colors.grey[700],
              ),
            ),
          ],
        ),
      ),
    );
  }

  // ✅ Floating Button
  Widget _buildFloatingActionButton() {
    return FadeInUp(
      duration: const Duration(milliseconds: 1600),
      delay: const Duration(milliseconds: 800),
      child: Container(
        width: double.infinity,
        margin: const EdgeInsets.symmetric(horizontal: 20),
        child: FloatingActionButton.extended(
          onPressed: () {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: const Text('Booking feature coming soon!'),
                backgroundColor: const Color(0xFF1E88E5),
                behavior: SnackBarBehavior.floating,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
            );
          },
          backgroundColor: const Color(0xFF1E88E5),
          elevation: 8,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
          label: const Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.calendar_today, color: Colors.white),
              SizedBox(width: 8),
              Text(
                'Book Test Drive',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
