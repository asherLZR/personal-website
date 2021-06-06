import { navigate } from 'gatsby';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
}
