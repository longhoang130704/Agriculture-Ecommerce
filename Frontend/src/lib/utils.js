import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrency (number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatDate (date) {
  const day = String(date.getDate()).padStart(2, '0'); // Định dạng ngày với 2 chữ số
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Định dạng tháng với 2 chữ số
  const year = date.getFullYear(); // Lấy năm
  return `${day}/${month}/${year}`;
};
