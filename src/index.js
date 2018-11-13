export default function useStateObj (props) {
  return Object.defineProperties({}, Object.entries(props).reduce((res, [key, init]) => {
    const [val, set] = useState(init);
      res[key] = { get: () => val, set: (v) => set(v) };
      return res;
    }, {}));
}
