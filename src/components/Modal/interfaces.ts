import { type usePortalReturns } from "../../hooks/usePortal/interfaces";

export interface ModalProps {
  onClose: Pick<usePortalReturns, "closePortal">;
  children: JSX.Element;
}
