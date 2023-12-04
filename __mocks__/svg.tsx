import { forwardRef, type LegacyRef } from "react";

const SvgrMock = forwardRef((props, ref) => (
  <span ref={ref as LegacyRef<HTMLSpanElement>} {...props} />
));
export const ReactComponent = SvgrMock;
export default SvgrMock;
