/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(listHarga, history) {
  // Write your code here

  let result = {};
  let total = 0;

  const histories = history.split(".");

  for (const row of histories) {
    const day = row.split("-");
    const menus = day[1].split(",");

    let price = [];
    for (const menu of menus) {
      const value = listHarga.find((x) => x.nama === menu);
      price.push(value.harga);
    }

    const save = 10000 - price.reduce((partialSum, a) => partialSum + a, 0);
    result[day[0]] = save;
    total += save;
  }
  result["TotalTabungan"] = total;

  return result;
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000,
  },
  {
    nama: "nasi",
    harga: 2000,
  },
  {
    nama: "cola",
    harga: 1000,
  },
  {
    nama: "chiki",
    harga: 1500,
  },
  {
    nama: "hotdog",
    harga: 3000,
  },
  {
    nama: "aqua",
    harga: 2000,
  },
];

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;
console.log(jumlahTabungan(hargaMakanan, historyPembelian));
