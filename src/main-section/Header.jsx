import profile from '../assets/images/boy1.png'
const Header = () => {
  return (
    <header className='max-w-screen-xl mx-auto px-4 flex justify-between items-center py-3 border-b mb-3'>
      <h3 className='font-bold text-2xl'>Knowledge Cafe</h3>
      <img src={profile} className='h-12 w-12' alt="" />
    </header>
  );
};

export default Header;