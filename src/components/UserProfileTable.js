import React from 'react';

const UserProfileTable = ({ user }) => {
  return (
    <table className="rounded-lg min-w-full table-auto w-full max-w-4xl mx-auto bg-slate-50">
      <tbody>
        <tr className="border-b-4 border-gray-300">
          <td className="px-6 py-4 text-lg text-gray-700 font-bold whitespace-nowrap">Izen Abizenak</td>
          <td className="px-6 py-4 text-lg text-gray-600">{user?.izena} {user?.abizenak}</td>
        </tr>
        <tr className="border-b-4 border-gray-300">
          <td className="px-6 py-4 text-lg text-gray-700 font-bold whitespace-nowrap">Email</td>
          <td className="px-6 py-4 text-lg text-gray-600">{user?.email}</td>
        </tr>
        <tr className="border-b-4 border-gray-300">
          <td className="px-6 py-4 text-lg text-gray-700 font-bold whitespace-nowrap">Jaiotze data</td>
          <td className="px-6 py-4 text-lg text-gray-600">{user?.jaiotzeData}</td>
        </tr>
        <tr className="border-b-4 border-gray-300">
          <td className="px-6 py-4 text-lg text-gray-700 font-bold whitespace-nowrap">Jaioterria</td>
          <td className="px-6 py-4 text-lg text-gray-600">{user?.jaioterria}</td>
        </tr>
        <tr className="border-b-4 border-gray-300">
          <td className="px-6 py-4 text-lg text-gray-700 font-bold whitespace-nowrap">Telefonoa</td>
          <td className="px-6 py-4 text-lg text-gray-600">{user?.telefonoa}</td>
        </tr>
        <tr className="border-b">
          <td className="px-6 py-4 text-lg text-gray-700 font-bold whitespace-nowrap">Sortze-data</td>
          <td className="px-6 py-4 text-lg text-gray-600">{new Date(user?.created_at).toLocaleDateString()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserProfileTable;
