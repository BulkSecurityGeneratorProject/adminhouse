/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { AdminhouseTestModule } from '../../../test.module';
import { PrecioProductoDeleteDialogComponent } from 'app/entities/precio-producto/precio-producto-delete-dialog.component';
import { PrecioProductoService } from 'app/entities/precio-producto/precio-producto.service';

describe('Component Tests', () => {
    describe('PrecioProducto Management Delete Component', () => {
        let comp: PrecioProductoDeleteDialogComponent;
        let fixture: ComponentFixture<PrecioProductoDeleteDialogComponent>;
        let service: PrecioProductoService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [AdminhouseTestModule],
                declarations: [PrecioProductoDeleteDialogComponent]
            })
                .overrideTemplate(PrecioProductoDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(PrecioProductoDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PrecioProductoService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});
