import Image from "next/image";
const AboutPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <iframe
          src="https://www.youtube.com/embed/VW99u6JUruo?autoplay=1"
          frameBorder="0"
          className="h-[80vh] w-[75vw]"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex justify-center items-center h-screen">
        <video
          src="/AI by SIr Qasim.mp4"
          className="h-[80vh] w-[65vw]"
          controls
        ></video>
      </div>
      <h1 className="text-3xl text-center font-semibold underline">Table</h1>
      <div className="flex justify-center items-center mx-auto my-8 ">
        <table className="table-auto border border-collapse border-black w-[75vw]">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200">Name</th>
              <th className="px-4 py-2 bg-gray-200">Age</th>
              <th className="px-4 py-2 bg-gray-200">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Ahmad</td>
              <td className="px-4 py-2">21</td>
              <td className="px-4 py-2">Faisalabad</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Ali</td>
              <td className="px-4 py-2">30</td>
              <td className="px-4 py-2">Lahore</td>
            </tr>
            <tr>
              <td className="px-4 py-2">babar</td>
              <td className="px-4 py-2">28</td>
              <td className="px-4 py-2">Lahore</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Usman</td>
              <td className="px-4 py-2">28</td>
              <td className="px-4 py-2">Peshawar</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Tahir</td>
              <td className="px-4 py-2">22</td>
              <td className="px-4 py-2">Sibi</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Mushtaq</td>
              <td className="px-4 py-2">32</td>
              <td className="px-4 py-2">Larkana</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="text-3xl text-center font-semibold underline">Image</h1>
      <Image
        src={"/panaverseLogo.png"}
        alt="Panaverse Image"
        width={1000}
        height={1000}
        className="w-[80vw] h-[80vh]"
      />
    </div>
  );
};

export default AboutPage;
