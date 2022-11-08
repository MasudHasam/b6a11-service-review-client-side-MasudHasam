import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Header = () => {
    return (
        <div className=''>
            <div className="carousel w-full">

                <PhotoProvider>
                    <PhotoView src="https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.jpg?b=1&s=170667a&w=0&k=20&c=kf6kV4VTt8B-rF2M717yFkg_GVBdfCYNXV-wfgpvKog=">
                        <div id="item1" className="carousel-item w-full  h-80">
                            <img src="https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.jpg?b=1&s=170667a&w=0&k=20&c=kf6kV4VTt8B-rF2M717yFkg_GVBdfCYNXV-wfgpvKog=" alt='' className="w-full rounded-lg" />
                        </div>
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://media.istockphoto.com/id/1353785314/photo/healthy-take-away-food-and-drink-in-disposable-eco-friendly-paper-containers.jpg?b=1&s=170667a&w=0&k=20&c=b_ZAcOfZdyFOTddvtEqSnJek4o9vZ73UBqDo-MYbihE=">
                        <div id="item2" className="carousel-item w-full h-80">
                            <img src="https://media.istockphoto.com/id/1353785314/photo/healthy-take-away-food-and-drink-in-disposable-eco-friendly-paper-containers.jpg?b=1&s=170667a&w=0&k=20&c=b_ZAcOfZdyFOTddvtEqSnJek4o9vZ73UBqDo-MYbihE=" alt='' className="w-full rounded-lg" />
                        </div>
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG1lYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
                        <div id="item3" className="carousel-item w-full h-80">
                            <img src="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG1lYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='' className="w-full rounded-lg" />
                        </div>
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src="https://plus.unsplash.com/premium_photo-1663840344687-a91e96693fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
                        <div id="item4" className="carousel-item w-full h-80">
                            <img src="https://plus.unsplash.com/premium_photo-1663840344687-a91e96693fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='' className="w-full rounded-lg" />
                        </div>
                    </PhotoView>
                </PhotoProvider>





            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Header;